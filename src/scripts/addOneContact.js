import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {

    console.log(PATH_DB);

    // try {
    //     const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    //     const fakeContact = createFakeContact();
    //     contacts.push(fakeContact);
    //     await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    // } catch (error) {
    //     console.log(error);
    // }
};

await addOneContact();
