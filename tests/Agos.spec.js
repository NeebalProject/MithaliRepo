import { test , expect } from '@playwright/test';
test ('validation', async ({ page }) => {




   await page.goto('https://d2pixnftayl5sy.cloudfront.net/login');


   const textBoxes = page.locator('input');


   // Username field (first input)
   await textBoxes.nth(0).click();
   await page.keyboard.type('mitali.mhatre@neebal.com');


   // Password field (second input)
   await textBoxes.nth(1).click();
   await page.keyboard.type('Agos@2026');


   // Click Submit/Login button
   await page.getByRole('button').click();


   console.log('Login button clicked');


   await page.waitForTimeout(3000);




   // Create user flow


   // Click on Master Management dropdown
await page.getByText('Master Management', { exact: true }).click();


console.log('Master Management dropdown clicked');


// Verify User Management option is visible
await expect(
   page.getByText('User Management', { exact: true })
).toBeVisible();


// Click User Management
await page.getByText('User Management', { exact: true }).click();


console.log('User Management tab clicked');


// Verify User Management page
await expect(
   page.getByText('User Management', { exact: true })
).toBeVisible();


console.log('User Management page opened successfully');


   // await page.getByText('In Progress', { exact: true }).click();


   // await page.locator('input').first().click();


  
   // await page.keyboard.type('2344');
   // await page.waitForTimeout(2000);


  
   // await page.keyboard.press('Enter');
   // await page.waitForTimeout(2000);


   // console.log('Search completed for 2344');


  


   // await page.getByRole('button', { name: 'Plan Now' }).click();
   // await page.waitForTimeout(2000);


   //   console.log('Plan Now button clicked');


   //   await page.getByRole('radio', { name: 'KG' }).check();
   //   await page.waitForTimeout(2000);


   //   const fileChooserPromise = page.waitForEvent('filechooser');


   // await page.getByRole('button', { name: /Upload/i }).click();


   // const fileChooser = await fileChooserPromise;


   // await fileChooser.setFiles
   // ('/home/neebal/Downloads/ATLAS AIR (1).xlsx')
  


   // // Wait for upload to complete
   // await page.waitForLoadState('networkidle');


   // // Wait until Confirm Template dialog appears
   // await expect(
   //     page.getByRole('heading', { name: 'Confirm Template' })
   // ).toBeVisible({ timeout: 30000 });


   // console.log('Confirm Template window displayed');
   // await page.waitForTimeout(2000);
   // // Verify Confirm button
   // await expect(
   //     page.getByRole('button', { name: 'Confirm' })
   // ).toBeEnabled();


   // // Click Confirm
   // await page.getByRole('button', { name: 'Confirm' }).click();
   // await page.waitForTimeout(2000);


   // console.log('Template confirmed successfully');


   // await page.getByRole('button', { name: 'Next' }).click();
   // await page.waitForTimeout(2000);
  
//  Edit flight


// await page.locator('tbody tr').first().locator('button').nth(3).click();


//     // Verify Edit Flight Details popup is displayed
//     await expect(page.getByText('Edit Flight Details')).toBeVisible();


//     console.log('Edit Flight Details window is displayed');


//     // Wait for Edit Flight window
//     await page.waitForTimeout(2000);


//     await expect(page.getByText('Edit Flight Details')).toBeVisible();


//     // Est. Departure Date
//     await page.locator('text=Est. Departure')
//           .locator('..')
//           .locator('input')
//           .first()
//           .fill('27-Jun-2026');
//           await page.waitForTimeout(2000);




// // Est. Departure Time
// await page.locator('text=Est. Departure')
//           .locator('..')
//           .locator('input')
//           .last()
//           .fill('10:30');
//           await page.waitForTimeout(2000);


//           // Scheduled Arrival date
//           await page.locator('text=Scheduled Arrival')
//           .locator('..')
//           .locator('input')
//           .first()
//           .fill('28-Jun-2026');
//           await page.waitForTimeout(2000);






//           // Scheduled Arrival Time


//           await page.locator('text=Scheduled Arrival')
//           .locator('..')
//           .locator('input')
//           .last()
//           .fill('10:30');
//           await page.waitForTimeout(2000);


//           await page.locator('textarea').fill('Flight departure time has been updated.');
//     await page.waitForTimeout(2000);


//     // // Click Update button
//      await page.getByRole('button', { name: 'Save Changes' }).click();


//      console.log('Flight updated successfully');








  
// Create flight flow
 
    await page.getByRole('button', { name: 'Create Flight' }).click();
    await page.waitForTimeout(3000);


     await page.getByPlaceholder('Select an airline').click();
    await page.keyboard.type('Alerce Airlines');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(3000);


   // Select Aircraft Registration
const aircraftDropdown = page
   .getByRole('dialog')
   .locator('ng-select')
   .filter({ hasText: 'Enter registration' })
   .getByRole('combobox');


await aircraftDropdown.click();


await aircraftDropdown.fill('F-AGOS9');


await page.getByLabel('Options List').getByText('F-AGOS9', { exact: true }).click();


console.log('Aircraft Registration selected: F-AGOS9');


//     await page.locator('input').nth(2).click();
//    await page.keyboard.type('F-AGOS9');
//    await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('Enter');
  




//   await page.getByText('Aircraft Reg*').click();
//        await page.getByPlaceholder('Enter registration').selectOption('F-AGOS8');


//Wait for dropdown options
await page.getByText('Aircraft Reg*').click();


// Search
await page.keyboard.type('F-AGOS9');


// Select the value
await page.keyboard.press('ArrowDown');
await page.keyboard.press('Enter');


// Select F-AGOS9
// const modal = page.locator('modal-container[role="dialog"]');


// await expect(modal).toBeVisible();


// await modal.getByText('F-AGOS9', { exact: true }).click();


// console.log('F-AGOS9 selected from modal');
//       await page.locator('#a01ca135dd00').scrollIntoViewIfNeeded();
//     //  // Select Aircraft Registration
//       await page.locator('#a01ca135dd00').click();
//       await page.keyboard.press('ArrowDown');
//       await page.keyboard.press('Enter');
  
// // Search for the registration
//      await page.getByText('F-a01ca135dd00-3').click();
//      await page.waitForTimeout(2000);


// //Select the first matching option
// await page.keyboard.press('ArrowDown');
// await page.keyboard.press('Enter');


console.log('Aircraft Registration selected: F-AGOS9');


/// Aircraft Registration already selected
console.log('Aircraft Registration selected: F-AGOS9');


// Flight Number
const flightNumber = page.getByRole('textbox', { name: 'Flight Number' });


await expect(flightNumber).toBeVisible();
await flightNumber.fill('50002');


console.log('Flight Number entered: 50002');








   
   // Departure and Arrival Station


const stationDropdowns = page
   .getByRole('dialog')
   .locator('ng-select')
   .filter({ hasText: 'Enter station' });


console.log('Station dropdown count:', await stationDropdowns.count());


// Departure Station
const departureStation = stationDropdowns.first();


await departureStation.locator('input[role="combobox"]').click();
await departureStation.locator('input[role="combobox"]').fill('BCN');


await page.getByText('BCN', { exact: true }).last().click();


console.log('Departure Station selected: BCN');


// Arrival Station
const arrivalStation = stationDropdowns.last();


await arrivalStation.locator('input[role="combobox"]').click();
await arrivalStation.locator('input[role="combobox"]').fill('DEL');


await page.getByText('DEL', { exact: true }).last().click();


console.log('Arrival Station selected: DEL');


    const dateTimeInputs = page.getByRole('dialog').locator('input');


await dateTimeInputs.nth(6).fill('15-Oct-2026');
await dateTimeInputs.nth(7).fill('11:30');


await dateTimeInputs.nth(8).fill('16-Oct-2026');
await dateTimeInputs.nth(9).fill('12:30');


console.log('STD/STA date and time entered');
    // Create Flight
    await page
   .getByRole('dialog')
   .getByRole('button', { name: 'Create Flight', exact: true })
   .click();




console.log('Flight created successfully');


// Confirmation popup
const createFlightPopup = page.getByRole('dialog').filter({
   hasText: 'Are you sure you want to create this flight?'
});


await expect(createFlightPopup).toBeVisible();


console.log('Create Flight confirmation popup displayed');


// Click Create button inside confirmation popup
await createFlightPopup
   .getByRole('button', { name: 'Create', exact: true })
   .click();


console.log('Create button clicked in confirmation popup');


await page.getByRole('button', { name: 'Open', exact: true }).click();


console.log('Open tab clicked successfully');


   await page.locator('input').first().click();


  
   await page.keyboard.type('50002');
   await page.waitForTimeout(2000);


  
   await page.keyboard.press('Enter');
   await page.waitForTimeout(2000);


// Search flight
// const searchBox = page.getByRole('textbox', { name: /search/i });


// await expect(searchBox).toBeVisible();


// await searchBox.fill('50002');


// console.log('Flight number searched: 50002');


// // Wait for search results to update
// await page.waitForTimeout(2000);


// // Verify flight row
// const flightRow = page.locator('tr').filter({ hasText: '50002' });


// await expect(flightRow).toBeVisible();


// console.log('Flight 50002 found successfully');


// Find the flight row
/// Search for the flight
// Search for the flight number
await page.getByRole('textbox', { name: 'Search' }).fill('50002');


console.log('Flight number entered in Search field');


// Wait for the flight row
var flightRow = page.locator('tr').filter({
   hasText: '50002'
});


await flightRow.waitFor({
   state: 'visible',
   timeout: 10000
});


console.log('Flight row is visible');


// Find the flight row
var flightRow = page.locator('tr').filter({
   hasText: '50002'
});


await flightRow.waitFor({
   state: 'visible',
   timeout: 10000
});


// Print all buttons inside the flight row
var buttons = await flightRow.locator('button').all();


console.log('Total buttons in flight row:', buttons.length);


for (var i = 0; i < buttons.length; i++) {
   console.log(
       'Button ' + i + ':',
       await buttons[i].innerText(),
       'Title:',
       await buttons[i].getAttribute('title'),
       'Aria-label:',
       await buttons[i].getAttribute('aria-label')
   );
}
console.log('Assign CLC button clicked');


// Wait for the CLC dropdown to load
await page.waitForTimeout(1500);


// Print visible dropdown options
var options = await page.locator(
   '[role="option"], .ng-option, [role="listbox"]'
).all();


console.log('Dropdown elements found:', options.length);


for (var i = 0; i < options.length; i++) {
   if (await options[i].isVisible()) {
       console.log(
           'Option ' + i + ':',
           await options[i].innerText()
       );
   }
}


// Print visible text containing "mitali"
var mitaliElements = page.getByText(/mitali/i).click();
console.log(
   'Elements containing mitali:',
   await mitaliElements.count()
);
console.log('Mitali Mhatre selected');


// Wait for the selection to update
await page.waitForTimeout(1000);


// Capture the visible page text for debugging
console.log(
   'Page text after CLC selection:',
   (await page.locator('body').innerText()).slice(-2000))
});

