import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'doc',
      id: 'actors',
      label: 'Actors',
    },
    {
      type: 'category',
      label: 'Payers',
      items: [
        'Payers/employer-sponsored',
        'Payers/others',
      ],
    },
    {
      type: 'category',
      label: 'Scratch work',
      items: [
        'Scratch work/examples',
        'Scratch work/scribbles',
      ],
    },
  ],
};

export default sidebars;
