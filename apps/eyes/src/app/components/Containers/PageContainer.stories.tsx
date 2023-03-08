import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PageContainer from './page';

// import imageFile from "/static/assets/colors.svg";

// const image = {
//   src: imageFile,
//   alt: "The colors",
// };

// export const WithAnImage = () => <img src={image.src} alt={image.alt} />

export default {
  title: 'Containers / Page',
  component: PageContainer,
  args: {
    id: 'page-container',
    // children: <WithAnImage></WithAnImage>,
  },
  argTypes: {
    id: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof PageContainer>;

export const PageContainerComponent: ComponentStory<typeof PageContainer> = (
  args
) => <PageContainer {...args} />
PageContainerComponent.args = {
  id: 'page-container',
  // children: <WithAnImage />
};
