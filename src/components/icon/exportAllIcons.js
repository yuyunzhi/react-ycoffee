let importAll = (requireContext) => {
  requireContext.keys().forEach(requireContext);
};

try {
  importAll(require.context("src/assets/icons/", true, /\.svg$/));
} catch (error) {}

// 使用动态引入，那么就在tree-shaking不生效
