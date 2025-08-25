import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ArrowUp10, BadgeCheck, MicVocal, SendHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/supabaseClient";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import vi from "dayjs/locale/vi";
import { Skeleton } from "@/components/ui/skeleton";

import { getAllUsers, getRandomUser, validateUserKey} from "@/lib/userdata";
import type { User } from "@/lib/userdata";
import { IMAGE_CONSTANTS } from "@/constants";

dayjs.extend(relativeTime);

// clone lại vi nhưng override relativeTime.past
const viShort = {
  ...vi,
  name: "vi-short",
  relativeTime: {
    ...vi.relativeTime,
    past: "%s", // bỏ chữ "trước",
    m: "1 phút",     // thay vì "một phút"
    h: "1 giờ",      // thay vì "một giờ"
    d: "1 ngày",     // thay vì "một ngày"
    M: "1 tháng",    // thay vì "một tháng"
    y: "1 năm",      // thay vì "một năm"
  },
};

dayjs.locale(viShort);

interface Comment {
  id: number;
  content: string;
  created_at: string;
  parent_id: number | null;
  reply_count: number;
  user_key: string;
}
export default function Review(){
  const [comment, setComment] = useState("");
  const [dataComment, setDataComment] = useState<Record<number,Comment>>({});
  const [dataCommentOrder, setDataComentOrder] = useState<number[]>([]);

  const [repliesMap, setRepliesMap] = useState<Record<string, any[]>>({});
  const [open, setOpen] = useState<Record<string, boolean>>({})
  //data input reply
  const [replyText, setReplyText] = useState<Record<number, string>>({});
  const [showReplyText, setShowReplyText] = useState<Record<number, boolean>>({});

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const loaderRef = useRef<HTMLDivElement | null> (null);

  //get gt postgresql excute
  // const [lastCreatedAt, setLastCreatedAt] = useState<string | null>(null);

  const PAGE_SIZE = 20;
  //loading and hasmore check
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  //Random user
  const [userData, setUserData] = useState<Record<string,User>|null>(null);
  
  //loadding reply comment 
  const loadReplies  = async (parentId:number|null) => {
     if(parentId!==null){
        const res = await supabase.from("comments").select("*")
        .eq("parent_id", parentId).order("created_at", {ascending: true});
        if(!res.error && res.data){
          setRepliesMap((prev) => ({
            ...prev,
            [parentId]: [...(prev[parentId] || []), ...res.data],
          }));
          setOpen((prev) => ({ ...prev, [parentId]: true }));
        }
        
     }
  }
  //hidden all comment 
  const hiddenReplies = async (parentId: number|null)=>{
      if(parentId!==null){
          setOpen(prev => ({
            ...prev,
            [parentId]: !prev[parentId], // đảo ngược trạng thái (true -> false, false -> true)
          }))
          //Delete state repli
          setRepliesMap(prev=>({
             ...prev,
             [parentId]: [],
          }))
     }
  }
  //get all data comments
  // const fetchComments = async () => {
  //     const res = await supabase.from("comments").select('*').is('parent_id', null).order('created_at', { ascending: true });
  //     if(!res.error){
  //         setDataComment((res.data || []).reduce((acc, comment: Comment)=>{
  //             acc[comment.id] = comment;
  //             return acc;
  //         }, {} as Record<number, Comment>));
  //         setDataComentOrder(res.data.map(c=>c.id));
  //     }
  //   }; 
    
  // Set text Reply
  const handleSetReply =  (comment_id:number, reply:string) => {
      //get comment id parent 
      setReplyText((prev)=>({
          ...prev,
          [comment_id]: reply 
      }));
  }
  //handleClickReply
  const handleclickReply = (comment_id:number)=>{
     //seen text component
      setShowReplyText((prev)=>({
         ...prev,
         [comment_id]: !prev[comment_id]
      }))
  }

  //Insert one new comments
  const insertComment = async(comment:string, parent_id: number|null, user_key?: string|null) => {
        if(userData){
          const check = validateUserKey(inputFilterKey(comment)[0], userData)
          //nếu trong input có key thì lấy key đó làm user nếu không thì lấy key mặc định
          if(check){
              const commentText = inputFilterKey(comment).slice(1).join(" ");
              const res = await supabase.from("comments")
              .insert([
                {
                  content: commentText,
                  parent_id: parent_id,
                  user_key: check,
                }
              ]).select();
              if (res.error) {
                console.error("Insert error:", res.error);
              } else {
                console.log("Inserted:",'pass');
              }
          }else{
              const res = await supabase.from("comments")
              .insert([
                {
                  content: comment,
                  parent_id: parent_id,
                  user_key: user_key || null,
                }
              ]).select();
              if (res.error) {
                console.error("Insert error:", res.error);
              } else {
                console.log("Inserted:",'pass');
              }
          }
        }

        
  }
  //handle submit input father 
  const handleSubmitFather = (comment: string):boolean => {
       if(!comment.trim()) return false; else return true;
  }

  //handle fetch more comment 
  const fetchMoreComments = async () => {
       if(loading||!hasMore) return;
       setLoading(true);

       let query = supabase
        .from("comments")
        .select("*")
        .is('parent_id', null)
        .order("created_at", { ascending: true })
        .limit(PAGE_SIZE);

          // Nếu đã có dữ liệu thì dùng cursor id
          if (dataCommentOrder.length > 0) {
            const lastId = dataCommentOrder[dataCommentOrder.length - 1];
            query = query.gt("id", lastId); // lấy các record có id > lastId
          }
        
        const res = await query;
        if(!res.error){
          // ép delay 2 giây
          setTimeout(()=>{
            //out of data
            if (res.data.length < PAGE_SIZE) {
                setHasMore(false); // hết dữ liệu
            }

            setDataComment(prev=>({
              ...prev,
              ...res.data.reduce((acc: Record<number,Comment>, c: Comment)=>{
                  acc[c.id] = c;
                  return acc;
              },{})
            }))
            //merge order, loại trùng bằng Set để an toàn vì dùng có thể spam sroll liên tục
            setDataComentOrder((prev) => [ ...new Set([...prev, ...res.data.map((c: Comment) => c.id)]) ]);
            setLoading(false);

          },2000);//delay 2 giây
        } else setLoading(false);
  }

  //handle input filter key
  const inputFilterKey = (text: string) : string[] => {
      const parts = text.trim().split(" ");
      return parts;
  }
  //load data first time
  useEffect(()=>{
      // fetchComments();
      fetchMoreComments();
      //load userData
      const fetchUser = async () => {
        const alldata = await getAllUsers();
        setUserData(alldata);
      };
      fetchUser();
  },[])


 //resize textarea
  useEffect(()=>{
    if (textareaRef.current) {
      const ta = textareaRef.current;
      ta.style.height = "auto"; // reset
      ta.style.height = ta.scrollHeight + "px"; // set height theo nội dung
    }
  },[comment])

  //resize textarea reply
  useEffect(()=>{
    if (textareaRef.current) {
      const ta = textareaRef.current;
      ta.style.height = "auto"; // reset
      ta.style.height = ta.scrollHeight + "px"; // set height theo nội dung
    }
  },[replyText])


  //listen even socket 
  useEffect(()=>{
      const channel = supabase
            .channel("realtime:comments")
            .on(
              "postgres_changes",
              { event: "INSERT", schema: "public", table: "comments" },
              (payload) => {
                  if((payload.new as Comment).parent_id!==null){
                    const newCmt = payload.new as Comment;
                    setDataComment((prev)=>({
                      ...prev,
                      [newCmt.parent_id!]: {...prev[newCmt.parent_id!], 
                        reply_count:prev[newCmt.parent_id!].reply_count + 1 } as Comment
                    }));
                    //get reply stext
                    setRepliesMap((prev)=>({
                        ...prev,
                        [newCmt.parent_id!]: [...prev[newCmt.parent_id!] ?? [], newCmt]
                    }))
                  }else {
                      const newCmt = payload.new as Comment;
                      setDataComment((prev)=>({
                        ...prev,
                          [newCmt.id] : newCmt
                        }))
                      setDataComentOrder((prev)=>[...prev, newCmt.id])
                  }
              }
            )

          .subscribe();

          return () => {
            supabase.removeChannel(channel);
          };
  },[])

  //infinite scroll
  useEffect(()=>{
      const observer = new IntersectionObserver(
         (entries) => {
            if(entries[0].isIntersecting){
                fetchMoreComments();
                console.log('Viewport srollback đã đỉnh nóc kịch trần')
            }
         },
         {threshold: 1}
      );
      if(loaderRef.current) observer.observe(loaderRef.current);
      return () => {
         if (loaderRef.current) observer.unobserve(loaderRef.current);
      }
  },[dataCommentOrder])

  return (
    <div className="flex-col w-full">
        <div className="flex justify-between items-center pb-5
        text-xs sm:text-sm md:text-base">
            <span className="font-semibold">Bình luận ({`${dataCommentOrder.length}`})</span>
            <ArrowUp10 className="w-5 h-5 md:w-6 md:h-6 hover:cursor-pointer active:p-1 active:rounded-full active:bg-gray-200 active:bg-opacity-50" />
        </div>

       <div className="flex gap-2 w-full text-xs sm:text-sm md:text-base">
        <Avatar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
          <AvatarImage src="./user_admin.jpg" alt="User Avatar" />
        </Avatar>

          {
            userData && <div className="w-full relative dark:bg-[#333334] bg-[#f0f2f5] pb-4 rounded-lg">
              <textarea
                maxLength={500}
                ref= {textareaRef}
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // Ngăn xuống dòng
                    if(handleSubmitFather(comment)){
                      insertComment(comment, null, getRandomUser(userData));
                      //reset comment
                      setComment('');
                    }
                  }
                }}
                className="w-full p-2 rounded-lg dark:bg-[#333334] bg-[#f0f2f5] focus:outline-none resize-none overflow-hidden"
                placeholder="Viết bình luận..."
              rows={1}
              />
              
              <SendHorizontal onClick={()=>{
                 if(handleSubmitFather(comment)){
                    insertComment(comment, null,getRandomUser(userData));
                    //reset comment
                    setComment('');
                 }
              }} className={`absolute p-1 text-[#fff] hover:cursor-pointer rounded-full bottom-1 right-1 ${handleSubmitFather(comment)?"bg-[#28a0a0]":"bg-[#bec3c9]"}
              w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7`} />
            </div>
          }
        </div>
         <hr className="border-t border-gray-300 w-full my-5" />
         {/* Comment  */}

        <div className="flex flex-col gap-y-3">
            {/* item comment */}
            <div className="flex gap-x-3">
                <div className="relative">
                  <Avatar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                      <AvatarImage src="./user_admin.jpg" alt="User Avatar" />
                  </Avatar> 
                  {/* <div className="absolute 
                  top-[1.5rem] bottom-[calc(10%-1.25rem)]
                  md:top-[2rem] md:bottom-[calc(10%-1.75rem)] 
                  lg:top-[2.5rem] lg:bottom-[calc(10%-2.25rem)] 
                  left-1/2  w-full 
                  border-2 border-gray-300 border-t-0 border-r-0 rounded-bl-lg"></div> */}
                </div>
                <div>
                  {/* comment cha  */}
                  <div>
                    {/* componet item comments bubble  */}
                    <div className="bg-[#f0f2f5] dark:bg-[#333334] rounded-2xl p-2 inline-block mb-1">
                      <div>
                        <div className="flex text-[#8e9194] items-center">
                            <MicVocal className="w-4 h-4" />
                            <span className="text-xs font-semibold"> Tác giả</span>
                        </div>
                        <div>
                            <span className="font-semibold text-xs sm:text-sm">Bùi Chí Thiện</span>
                        </div>
                      </div>
                      {/* text comment  */}
                      <div className="text-xs sm:text-sm md:text-base text-justify leading-snug">
                         <span>Có ai ở đây khum.</span>
                      </div>
                    </div>
    
                    <div className="flex items-center justify-between">
                      {/* component text  */}
                        <div className="flex items-center gap-x-3 text-xs font-semibold text-[#929497]">
                            <span className="hover:cursor-pointer">20 năm</span>
                            <span className="text-[#6c6f73] hover:cursor-pointer">Thích</span>
                            <span className="hover:cursor-pointer">Trả lời</span>
                        </div>
                        {/* icon reaction  */}
                        <div className="flex items-center text-sm pl-3">
                            <span className="text-xs font-semibold pr-1 text-[#6c6f73]">10K </span><img src={IMAGE_CONSTANTS.fb_haha} alt="reaction" className="w-3 h-3 sm:w-4 sm:h-4" />
                            {/* <span className="text-yellow-500">😆</span> */}
                        </div>
                    </div>
                  </div>
                </div>
                
            </div>


            {/* item comment */}
            
              {
                userData && dataCommentOrder.length>0 && dataCommentOrder.map((id)=>{
                    if(dataComment[id]?.parent_id===null) return (
                      <div key={id} className={`${dataComment[id]?.reply_count > 0 && open[dataComment[id]?.id] &&  "mb-5 md:mb-8 lg:mb-10"}`}>
                        <div className="flex gap-x-3 sm:pb-2">
                      <div className="relative">
                        <Avatar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                           <AvatarImage src={dataComment[id]?.user_key ? userData[dataComment[id]?.user_key].image : "./user_admin.jpg"} alt="User Avatar" />
                        </Avatar>
                        {
                          ((dataComment[id]?.reply_count > 0 && open[dataComment[id]?.id]) || showReplyText[dataComment[id]?.id]) && <div className="absolute 
                        top-[1.5rem] bottom-[calc(1%-1.25rem)]
                        md:top-[2rem] md:bottom-[calc(1%-1.75rem)] 
                        lg:top-[2.5rem] lg:bottom-[calc(1%-2.25rem)] 
                        left-1/2  w-full 
                        border-2 border-gray-300 border-t-0 border-r-0 rounded-bl-lg "></div>
                        }
                      </div>
                    <div>
                      {/* comment cha  */}
                      <div>
                        {/* componet item comments bubble  */}
                        <div className="bg-[#f0f2f5] dark:bg-[#333334] rounded-2xl p-2 inline-block mb-1">
                          <div>
                            <div className="flex gap-x-1 items-center">
                                <span className="font-semibold text-xs sm:text-sm">{dataComment[id]?.user_key ? userData[dataComment[id]?.user_key].name : "Bùi Chí Thiện"}</span>
                                <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 stroke-white bg-[#2374e1] rounded-full p-0.5" />
                            </div>
                          </div>
                          {/* text comment  */}
                          <div className="text-xs sm:text-sm md:text-base text-justify leading-snug">
                            <span>{dataComment[id]?.content}</span>
                          </div>
                        </div>
        
                        <div className="flex items-center justify-between">
                          {/* component text  */}
                            <div className="flex items-center gap-x-3 text-xs font-semibold text-[#929497]">
                                <span className="hover: cursor-pointer">{dayjs(dataComment[id]?.created_at).fromNow()}</span>
                                <span className="text-[#6c6f73] hover: cursor-pointer">Thích</span>
                                <span className="hover: cursor-pointer" onClick={()=>handleclickReply(dataComment[id]?.id)}>Trả lời</span>
                            </div>
                            {/* icon reaction  */}
                            <div className="flex items-center text-sm pl-3">
                                <img src={IMAGE_CONSTANTS.fb_haha} alt="reaction" className="w-3 h-3 sm:w-4 sm:h-4" />
                                {/* <span className="text-yellow-500">😆</span> */}
                            </div>
                        </div>
                        {
                          dataComment[id]?.reply_count > 0 && open[dataComment[id]?.id] && repliesMap[dataComment[id]?.id] && repliesMap[dataComment[id]?.id].map((item1:any, index1)=>{
                              return (
                                  <div key={`reply_${index1}`} className="pt-5 flex gap-x-3">
                                      <div className="relative inline-block">
                                        <div className="absolute right-[90%]
                                        top-[1.25rem] bottom-[calc(10%-1rem)]
                                        md:top-[1.75rem] md:bottom-[calc(10%-1.5rem)] 
                                        lg:top-[2.25rem] lg:bottom-[calc(10%-2rem)] 
                                        w-[95%] h-full 
                                        border-2 border-gray-300 border-l-0 border-r-0 border-b-0"></div>
                                        <Avatar className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9">
                                            <AvatarImage src={item1?.user_key ? userData[item1?.user_key].image : "./user_admin.jpg"} alt="User Avatar" />
                                        </Avatar>
                                      </div>
                                      <div>
                                        {/* comment cha  */}
                                        <div>
                                          {/* componet item comments bubble  */}
                                          <div className="bg-[#f0f2f5] dark:bg-[#333334] rounded-2xl p-2 inline-block mb-1">
                                            <div>
                                              <div className="flex gap-x-1 items-center">
                                                  <span className="font-semibold text-xs sm:text-sm">{item1?.user_key ? userData[item1?.user_key].name : "Bùi Chí Thiện"}</span>
                                                  <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 stroke-white bg-[#2374e1] rounded-full p-0.5" />

                                              </div>
                                            </div>
                                            {/* text comment  */}
                                            <div className="text-xs sm:text-sm md:text-base text-justify leading-snug">
                                              <span>{item1?.content}</span>
                                            </div>
                                          </div>
                          
                                          <div className="flex items-center justify-between">
                                            {/* component text  */}
                                              <div className="flex items-center gap-x-3 text-xs font-semibold text-[#929497]">
                                                  <span className="hover: cursor-pointer">{dayjs(item1.created_at).fromNow()}</span>
                                                  <span className="text-[#6c6f73] hover: cursor-pointer">Thích</span>
                                                  <span className="hover: cursor-pointer" onClick={()=>handleclickReply(dataComment[id]?.id)}>Trả lời</span>
                                              </div>
                                              {/* icon reaction  */}
                                              <div className="flex items-center text-sm pl-3">
                                                  <img src={IMAGE_CONSTANTS.fb_haha} alt="reaction" className="w-3 h-3 sm:w-4 sm:h-4" />
                                                  {/* <span className="text-yellow-500">😆</span> */}
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                              )
                          })
                        }
                        {
                            (dataComment[id]?.reply_count > 0 && !open[dataComment[id]?.id]) && (<div className="pt-1">
                              <span onClick={()=>{loadReplies(dataComment[id]?.id)}} className="text-xs sm:text-sm md:text-base font-semibold text-[#9fa1a4] hover: cursor-pointer hover:underline"
                              >Xem tất cả {dataComment[id]?.reply_count} phản hồi</span>
                            </div>) 
                    
                        }
                        {
                          (dataComment[id]?.reply_count > 0 && open[dataComment[id]?.id]) &&(<div className="pt-1">
                              <span onClick={()=>{hiddenReplies(dataComment[id]?.id)}} className="text-xs sm:text-sm md:text-base font-semibold text-[#9fa1a4] hover: cursor-pointer hover:underline"
                              >Ẩn tất cả {dataComment[id]?.reply_count} phản hồi</span>
                            </div>)
                        }
                      </div>
                    </div>
    
    
                        </div>

                        {
                          showReplyText[dataComment[id]?.id] && <div className="flex pl-10 gap-2 w-full text-xs sm:text-sm md:text-base">
                          <Avatar className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9">
                            <AvatarImage src="./user_admin.jpg" alt="User Avatar" />
                          </Avatar>

                            <div className="w-full relative dark:bg-[#333334] bg-[#f0f2f5] pb-4 rounded-lg">
                              <textarea
                                maxLength={500}
                                ref={textareaRef}
                                value={replyText[dataComment[id]?.id]}
                                onChange={(e)=>handleSetReply(dataComment[id]?.id,e.target.value)}
                                className="w-full p-2 rounded-lg dark:bg-[#333334] bg-[#f0f2f5] focus:outline-none resize-none overflow-hidden"
                                placeholder="Viết bình luận..."
                              rows={1}
                              onKeyDown={(e) => {
                                  if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault(); //ngăn xuống dòng
                                    if(handleSubmitFather(replyText[dataComment[id]?.id]??"")){
                                      insertComment(replyText[dataComment[id]?.id], dataComment[id]?.id, getRandomUser(userData));
                                      setReplyText((prev)=>({
                                        ...prev,
                                        [dataComment[id]?.id]: ""
                                    }))
                                  }
                                  }
                                }}
                              />
                              <SendHorizontal className={`absolute rounded-full text-[#fff] p-1 bottom-1 right-1 ${handleSubmitFather(replyText[dataComment[id]?.id]??"")?"bg-[#28a0a0]":"bg-[#bec3c9]"}
                              w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7`} onClick={() => {
                                  if(handleSubmitFather(replyText[dataComment[id]?.id]??"")){
                                      insertComment(replyText[dataComment[id]?.id], dataComment[id]?.id,getRandomUser(userData));
                                      setReplyText((prev)=>({
                                        ...prev,
                                        [dataComment[id]?.id]: ""
                                      }))
                                  }
                              }} />
                            </div>
                          </div>
                        }

                      </div>
                    );
                })
              }
               {hasMore ? (
                <div ref={loaderRef} className="flex">
                  {loading && (
                        //skeleton
                       
                        <div className="flex flex-col space-y-2 w-full">
                           {[...Array(3)].map((_, i)=>{
                                return <div key={i} className="flex items-start space-x-3 w-full">
                                        <Skeleton className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gray-300" />
                                        <div className="flex-1 space-y-2">
                                          <Skeleton className="h-15 sm:h-20 w-full bg-gray-300 rounded-lg" />
                                          <Skeleton className="h-5 w-1/2 bg-gray-300 rounded-lg" />
                                        </div>
                                      </div>
                           })}
                            
                        </div>
                       
                        
                  )}
                </div>
              ) : (
                <div className="text-center text-gray-400 text-xs sm:text-sm md:text-base mt-2">Bạn đã xem hết bình luận</div>
              )}
             

        </div>



        

    </div>

  );
}