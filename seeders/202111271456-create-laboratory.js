'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Laboratories',
      [
        {
          name: 'PANALAB SA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NUTRICIA MED (DISPRO)',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BAGO DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EWE PHARMOS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GARDEN HOUSE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DOMINGUEZ DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GENOMMA PER',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EXCELENTIA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'VALUGE FARMANET',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SAVANT CONSUMER',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BALIARDA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NUTRICIA BAGO DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ETHICAL PHARMA ROFINA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'RAYMOS-MEGALABS ROFINA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CASSARA PHARMOS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LERSAN PHARMOS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ONCOFARMA SRL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'FRAMINGHA PHARMA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ELEA - PHOENIX DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LAFEDAR DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BAYER POP',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LAFARMEN',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MAX VISION ROFINA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CASASCO FARMANET',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ANDROMACO FARMANET',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BETA DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'FINADIET ROFINA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SIDUS DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BERNABO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'PHARMA ALIOTH',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'RICHET',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EUROFAR DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'FORMULAB S.A',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'R BENCKISER',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'LABORATORIO ECZANE PHARMA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'PFIZER DISPRO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'NOVA ARGENTIA ROFINA',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
