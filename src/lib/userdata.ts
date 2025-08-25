// Định nghĩa type cho user
export type User = {
  name: string;
  image: string;
};



// Lấy toàn bộ user từ public/data/users.json
export const getAllUsers = async (): Promise<Record<string, User> | null> => {
    let cache: Record<string, User> | null = null;
  if (!cache) {
    const res = await fetch(`${import.meta.env.BASE_URL}data/users.json`);
    if (!res.ok) {
      throw new Error("Không thể tải users.json");
    }
    cache = await res.json();
  }
  return cache;
};

// Lấy user theo key
export const getUserByKey =  (key: string, users: Record<string, User> ): User | undefined => {
  if(users) return users[key];
  return undefined;
};

// Lấy user random
export const getRandomUser = (users: Record<string, User>) : string | undefined => {
  if (!users) return undefined;

  const keys = Object.keys(users);
  if (keys.length === 0) return undefined;

  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return randomKey;
};


// Kiểm tra key có tồn tại không
export const validateUserKey = (
  key: string,
  users: Record<string, User>
): string | null => {
  if (users && key in users) {
    return key;
  }
  return null;
};