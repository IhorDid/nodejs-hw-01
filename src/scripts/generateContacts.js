import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = data ? JSON.parse(data) : [];

    const addContacts = [];
    for (let i = 0; i < number; i++) {
      addContacts.push(createFakeContact());
    }

    const newContacts = [...contacts, ...addContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts, null, 2));
    console.log(`${number} contacts add`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
