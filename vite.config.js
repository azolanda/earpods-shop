import {
    defineConfig,
    loadEnv
} from "vite";
import react from '@vitejs/plugin-react';

export default ({
    mode
}) => {
    // load the app level env variables and add them to the Node level env variables:
    // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
    process.env = {
        ...process.env,
        ...loadEnv(mode, process.cwd())
    };

    return defineConfig({
        plugins: [react()],
        base: process.env.NODE_ENV === "production" ? "/earpods-shop/" : "/",
        build: {
            assetsDir: "assets",
        },
    })
}