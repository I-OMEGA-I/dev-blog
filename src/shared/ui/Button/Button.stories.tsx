import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAN,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundSquaredM = Template.bind({});
BackgroundSquaredM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    squared: true,
};

export const BackgroundSquaredL = Template.bind({});
BackgroundSquaredL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    squared: true,
};

export const BackgroundSquaredXL = Template.bind({});
BackgroundSquaredXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    squared: true,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundSquaredMDark = Template.bind({});
BackgroundSquaredMDark.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    squared: true,
};
BackgroundSquaredMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundSquaredLDark = Template.bind({});
BackgroundSquaredLDark.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    squared: true,
};
BackgroundSquaredLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundSquaredXLDark = Template.bind({});
BackgroundSquaredXLDark.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    squared: true,
};
BackgroundSquaredXLDark.decorators = [ThemeDecorator(Theme.DARK)];
