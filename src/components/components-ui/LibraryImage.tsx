import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// Import plugin đúng cách
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// CSS
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface LibraryImageProps {
  data?: { src: string }[]; // dữ liệu truyền vào
  limit?: number; // số lượng ảnh muốn hiển thị
  css_grid?: string; // đơn vị phân số
}

export default function LibraryImage({data, css_grid="grid grid-cols-2 md:grid-cols-3 gap-2 [grid-auto-rows:0.5fr]", limit=6}:LibraryImageProps) {
    const defaultImages = [
  {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755079039/profile5_kpo0ks.jpg"},
  {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755078544/profile1_stsyyt.jpg"},
  {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755078545/profile2_zhdxeq.jpg"},
  {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755078550/profile3_msdqnx.jpg"},
  {src:"https://res.cloudinary.com/dgrwfoh9x/image/upload/v1755078548/profile4_lrvnet.jpg"},
  {src:"./tdmu.jpg"},
];
   let images = data && data.length > 0 ? data : defaultImages;
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return (
        <div className="w-full h-ful p-5 ">
            <div className={css_grid}>
            {images.slice(0,limit).map((src, index) => (
                <div
                key={index}
                className="relative w-full h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                <img
                    src={src.src}
                    alt={`Image ${index + 1}`}
                    className="hover:cursor-pointer
                    w-full h-full rounded-lg sm:rounded-none object-cover hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                        setOpen(true);
                        setIndex(index);
                    }}
                />
                    {/* Overlay mờ */}
                    {
                        index===(limit-1) && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white text-xl font-bold">+{images.length}</span>
                            </div>
                        )
                    }
                </div>
            ))}
            </div>


             {/* Lightbox với plugin */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        thumbnails={{
          width: 100,
          height: 70,
          borderRadius: 8,
        }}
        zoom={{ maxZoomPixelRatio: 3 }}
        fullscreen={{ auto: false }}
      />
        </div>
    );
}