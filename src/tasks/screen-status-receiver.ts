interface ScreenStatusMetadata {
  screenWaked: boolean;
}

export default async function ({screenWaked}: ScreenStatusMetadata) {
  console.log('status', screenWaked);
}
