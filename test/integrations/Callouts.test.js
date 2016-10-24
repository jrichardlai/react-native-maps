import 'babel-polyfill';
import integration from '../helpers/integration';

const { it, isIOS } = integration;

describe('Callouts', function() {
  // TODO make this test check that when the pin is clicked the modal is showing
  it('should show custom callouts', async function callback(driver) {
    await driver.clickElementByReactNativeName('Custom Callouts');

    await driver.elementByReactNativeName('Tap on markers to see different callouts');

    await driver.elementByName('Map pin').click();

    await driver.sleep(1000);

    await driver.clickElementByReactNativeName('Hide');
  });
});
