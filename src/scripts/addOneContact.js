import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contact = JSON.parse(data);
    const oneContact = createFakeContact();

    const updateContacts = [...contact, oneContact];
    await fs.writeFile(PATH_DB, JSON.stringify(updateContacts, null, 2));
    console.log('contact add');
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
