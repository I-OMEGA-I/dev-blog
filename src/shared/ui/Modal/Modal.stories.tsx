import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla, harum quo minus aspernatur fugiat explicabo, itaque sed architecto amet obcaecati aut adipisci neque molestiae vel molestias laboriosam vitae quibusdam.',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla, harum quo minus aspernatur fugiat explicabo, itaque sed architecto amet obcaecati aut adipisci neque molestiae vel molestias laboriosam vitae quibusdam.',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
