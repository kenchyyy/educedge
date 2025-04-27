type feature = {
  featureName: string;
  featureDescription: string;
  handsome: number;
};

const printFeature = (feature: feature) => {
  console.log(`Feature Name: ${feature.featureName}`);
};
