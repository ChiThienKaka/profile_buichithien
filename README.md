# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
//fix component
item.parent_id ? 
                 (
                    <div key={index} className="flex gap-x-3">
                  <div className="relative">
                    <Avatar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                        <AvatarImage src="./user_admin.jpg" alt="User Avatar" />
                    </Avatar> 
                    <div className="absolute 
                    top-[1.5rem] bottom-[calc(10%-1.25rem)]
                    md:top-[2rem] md:bottom-[calc(10%-1.75rem)] 
                    lg:top-[2.5rem] lg:bottom-[calc(10%-2.25rem)] 
                    left-1/2  w-full 
                    border-2 border-gray-300 border-t-0 border-r-0 rounded-bl-lg"></div>
                  </div>
                  <div>
                    {/* comment cha  */}
                    <div className="inline-block">
                      {/* componet item comments bubble  */}
                      <div className="bg-[#f0f2f5] dark:bg-[#333334] rounded-2xl p-2 inline-block mb-1">
                        <div>
                          <div>
                              <span className="font-semibold text-xs sm:text-sm">Bùi Chí Thiện</span>
                          </div>
                        </div>
                        {/* text comment  */}
                        <div className="text-xs sm:text-sm md:text-base text-justify leading-snug">
                          <span>{item?.content}</span>
                        </div>
                      </div>
      
                      <div className="flex items-center justify-between">
                        {/* component text  */}
                          <div className="flex items-center gap-x-3 text-xs font-semibold text-[#929497]">
                              <span>2 năm</span>
                              <span className="text-[#6c6f73]">Thích</span>
                              <span>Trả lời</span>
                          </div>
                          {/* icon reaction  */}
                          <div className="flex items-center text-sm pl-3">
                              <span className="text-yellow-500">😆</span>
                          </div>
                      </div>
                    </div>

                    {/* repply con  */}
                    <div className="pt-5 flex gap-x-3">
                          <div className="relative inline-block">
                            <div className="absolute right-[90%]
                            top-[1.25rem] bottom-[calc(10%-1rem)]
                            md:top-[1.75rem] md:bottom-[calc(10%-1.5rem)] 
                            lg:top-[2.25rem] lg:bottom-[calc(10%-2rem)] 
                            w-[95%] h-full 
                            border-2 border-gray-300 border-l-0 border-r-0 border-b-0"></div>
                            <Avatar className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9">
                                <AvatarImage src="./user_admin.jpg" alt="User Avatar" />
                            </Avatar>
                          </div>
                          <div>
                            {/* comment cha  */}
                            <div>
                              {/* componet item comments bubble  */}
                              <div className="bg-[#f0f2f5] dark:bg-[#333334] rounded-2xl p-2 inline-block mb-1">
                                <div>
                                  <div>
                                      <span className="font-semibold text-xs sm:text-sm">Bùi Chí Thiện</span>
                                  </div>
                                </div>
                                {/* text comment  */}
                                <div className="text-xs sm:text-sm md:text-base text-justify leading-snug">
                                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quaerat dolorum quas molestiae nihil fugiat deserunt debitis doloremque, officiis libero tenetur vel. Nobis cupiditate eos placeat dolores. Aliquid, reprehenderit repellat.</span>
                                </div>
                              </div>
              
                              <div className="flex items-center justify-between">
                                {/* component text  */}
                                  <div className="flex items-center gap-x-3 text-xs font-semibold text-[#929497]">
                                      <span className="hover: cursor-pointer">2 năm</span>
                                      <span className="text-[#6c6f73] hover: cursor-pointer">Thích</span>
                                      <span className="hover: cursor-pointer">Trả lời</span>
                                  </div>
                                  {/* icon reaction  */}
                                  <div className="flex items-center text-sm pl-3">
                                      <span className="text-yellow-500">😆</span>
                                  </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>
                    </div>
                 ): 
## UI UX
//component product 
https://miro.medium.com/v2/resize:fit:1400/1*eDC7IKeq7h2J7-a7iUa6pg.png
//component info card
https://i.sstatic.net/J0qds.png

//component list
https://assets.justinmind.com/wp-content/uploads/2019/10/ui-design-new-document-task-manager.png