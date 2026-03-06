import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                gold: { value: "#facc15" },
                regular: { value: "#374151" },
                blueTint: { value: "#eef2ff" }
            },
        },
        semanticTokens: {
            colors: {
                badge: {
                    gold: {
                        bg: { value: "{colors.gold}" },
                        fg: { value: "{colors.black}" },
                    },
                    regular: {
                        bg: { value: "{colors.regular}" },
                        fg: { value: "{colors.white}" },
                    },
                },
                background: {
                    bg: { value: "{colors.blueTint}" }
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, customConfig);
