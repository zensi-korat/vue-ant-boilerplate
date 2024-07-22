// src/stories/Select.stories.ts
import type { Meta, StoryFn } from '@storybook/vue3';
import { Select } from 'ant-design-vue';

export default {
  title: 'Ant Design/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['default', 'multiple']
    },
    size: {
      control: 'radio',
      options: ['small', 'middle', 'large']
    },
    disabled: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Select },
  setup() {
    return { args };
  },
  template: `
    <Select v-bind="args" style="width: 200px;" placeholder="Select option">
      <Select.Option value="option1">Option 1</Select.Option>
      <Select.Option value="option2">Option 2</Select.Option>
      <Select.Option value="option3">Option 3</Select.Option>
    </Select>
  `
});

export const Default = Template.bind({});
Default.args = {
  mode: 'default',
  size: 'middle'
};
