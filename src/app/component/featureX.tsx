type feature = {
  featureName: string;
  featureDescription: string;
  handsome: number;
  age: number;
  isActive: boolean;
};

const printFeature = (feature: feature) => {
  console.log(`Feature Name: ${feature.featureName}`);
  console.log(`Description: ${feature.featureDescription}`);
  console.log(`Handsome Level: ${feature.handsome}`);
  console.log(`Age: ${feature.age}`);
  console.log(`Is Active: ${feature.isActive}`);
}