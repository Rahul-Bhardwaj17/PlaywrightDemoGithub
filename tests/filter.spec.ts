import { test } from "../Utility/index";

test('A - normal test', async () => {
    console.log('A test')
});
test('B - only test', async () => {
    console.log('B test')
});
test.skip('C - skipped test', async () => {
    console.log('c test')
});
test('D - login test', async () => {
    console.log('D test')
});
