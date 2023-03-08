import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import PageContainer from 'src/app/components/Containers/page';
import ModuleHeader from './moduleHeader';

export default {
  title: 'Components/Headers/ModuleHeader',
  component: ModuleHeader,
  args: {
    headerTag: 'h1',
    headerContent: 'Gamers',
    primary: true,
    id: 'page-container',
  },
  argTypes: {
    headerTag: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'radio' },
      description: 'Choose a header style tag',
    },
    headerContent: {
      control: 'text',
    },
    id: {
      control: 'text',
    },
    primary: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ModuleHeader>;

export const Component: ComponentStory<typeof ModuleHeader> = ({
  primary = false,
  headerTag = 'h1',
  ...args
}) => {
  // const computedClasses = useMemo(() => {
  //   const modeClass = getModeClasses(primary);
  //   const sizeClass = getSizeClasses(headingTag);
  //   return [modeClass, sizeClass].join(' ');
  // }, [primary, headingTag]);
  return <ModuleHeader headerTag="h1" primary={true} {...args} />;
};
Component.args = {
  headerTag: 'h1',
  headerContent: 'Default Module Header',
  primary: true,
};

export const WithPageContainer: any = (args: any) => (
  <PageContainer id="page-container" {...args}>
    <ModuleHeader primary={true} headerTag="h1" headerContent="Gamer" />
    <ModuleHeader primary={true} headerTag="h1" headerContent="Files" />
  </PageContainer>
);

export const AllVariations: any = (args: any) => (
  <PageContainer id="page-container" {...args}>
    <div>
      <ModuleHeader primary={true} headerTag="h1" headerContent="Gamer" />
      <ModuleHeader primary={true} headerTag="h2" headerContent="Gamer" />
      <ModuleHeader primary={true} headerTag="h3" headerContent="Gamer" />
      <ModuleHeader primary={true} headerTag="h4" headerContent="Files" />
      <ModuleHeader primary={true} headerTag="h5" headerContent="Files" />
      <ModuleHeader primary={true} headerTag="h6" headerContent="Files" />
    </div>
    <div>
      <ModuleHeader primary={true} headerTag="h1" headerContent="h1" />
      <ModuleHeader primary={true} headerTag="h2" headerContent="h2" />
      <ModuleHeader primary={true} headerTag="h3" headerContent="h3" />
      <ModuleHeader primary={true} headerTag="h4" headerContent="h4" />
      <ModuleHeader primary={true} headerTag="h5" headerContent="h5" />
      <ModuleHeader primary={true} headerTag="h6" headerContent="h6" />
    </div>
  </PageContainer>
);
