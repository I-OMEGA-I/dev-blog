import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Heading 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam debitis perferendis ducimus repellendus eos libero quo optio iusto, hic illo ea consequatur reprehenderit reiciendis? Pariatur magnam esse quisquam cumque.',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Heading 1',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam debitis perferendis ducimus repellendus eos libero quo optio iusto, hic illo ea consequatur reprehenderit reiciendis? Pariatur magnam esse quisquam cumque.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Heading 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam debitis perferendis ducimus repellendus eos libero quo optio iusto, hic illo ea consequatur reprehenderit reiciendis? Pariatur magnam esse quisquam cumque.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Heading 1',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam debitis perferendis ducimus repellendus eos libero quo optio iusto, hic illo ea consequatur reprehenderit reiciendis? Pariatur magnam esse quisquam cumque.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Heading 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quibusdam debitis perferendis ducimus repellendus eos libero quo optio iusto, hic illo ea consequatur reprehenderit reiciendis? Pariatur magnam esse quisquam cumque.',
    theme: TextTheme.ERROR,
};
