// src/stories/Button.stories.ts
import type { Meta, StoryFn } from '@storybook/vue3';
import { Button } from 'ant-design-vue';

export default {
  title: 'Ant Design/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'dashed', 'link', 'text', 'default']
    },
    size: {
      control: 'radio',
      options: ['small', 'middle', 'large']
    },
    disabled: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>'
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};
