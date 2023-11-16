import antfu from "@antfu/eslint-config"

export default antfu(
  {
    stylistic: {
      indent: 2,
      quotes: "double",
    },
    rules: {
      "semi": ["error", "never"],
      "vue/block-order": ["error", {
        order: ["template", "script", "style"],
      }],
      "vue/block-lang": ["error", {
        script: {
          lang: "ts",
        },
      }],
    },
  },
)
