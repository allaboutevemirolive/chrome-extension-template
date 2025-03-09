# Chrome Extension Template  

## **What's Included in This Template?**  
This Chrome extension template comes with the following features and tools:  
- **TypeScript** for type safety.  
- **pnpm** as the package manager.  
- **Vite** for fast development and build setup.  
- **React** for building UI components.  
- **TailwindCSS** for styling.  
- **Service Worker** for background tasks.  
- **Content Script** for interacting with web pages.  
- `"@"` as a path alias for cleaner imports.  
- Include Auto-Build Script `./scripts/watch-build.sh`
- Pre-configured and ready to use.  
- Battle-tested for reliability.  

## **Key Files to Check in This Project**  
Here are some important files you might want to review:  
- `vite.config.ts`: Configuration for Vite.  
- `public/manifest.json`: The extension's manifest file.  
- `package.json`: Project dependencies and scripts.  
- `tailwind.config.js`: Configuration for TailwindCSS.  

## **Commands**  

To compile the project, navigate to the root directory and run:  

```sh
pnpm build
```
This will create a `build` folder. You can use this folder to `Load Unpacked` in `chrome://extensions/`.

### **Auto-Build with `watch-build.sh`**  

For automatic builds whenever you make changes, use the `watch-build.sh` script located in the `scripts` folder.  

#### **Example:**  
1. Make the script executable:  
   ```sh
   chmod +x ./scripts/watch-build.sh
   ```  

2. Run the script:  
   ```sh
   ./scripts/watch-build.sh . 'pnpm build'
   ```  
This will rebuild the project every time you make updates.  

### **tsc and vite build**

If you prefer not to use the Auto-Build Script, you can still ensure the project compiles correctly using `pnpm watch`(check `package.json`) or the following command:

```sh
tsc -b --watch vite build --watch
```

## **Take Note**  

When working with `content-script.js` and `service-worker.js`, you need to use two different Chrome consoles.  

### **1. For `content-script.js`**  
- Use the standard Chrome DevTools console.  
- Inspect any website where your content script is running to access the console.  

### **2. For `service-worker.js`**  
To access the console for `service-worker.js`:  
1. Navigate to `chrome://extensions/`.  
2. Enable **Developer mode** (toggle it at the top-right corner).  
3. Find your extension on the same page and click **Inspect views: service worker**.  
4. A new developer console will open, where you can view logs and debug your service worker.  

## **Extras and References**

- [Manifest V3 guide](https://github.com/allaboutevemirolive/chrome-extension-template/blob/main/extras/MV3_Guide.md)

- [Chrome Extension API](https://developer.chrome.com/docs/extensions/reference/api)

- [Chrome Extension Permissions](https://developer.chrome.com/docs/extensions/reference/permissions-list)

- [Chrome Extension Manifest](https://developer.chrome.com/docs/extensions/reference/manifest)

## **Copyright and license**

Code released under the [MIT License](https://github.com/allaboutevemirolive/chrome-extension-template/blob/main/LICENSE).
