import classNames from 'classnames'
import { CardHeader, Card as MsCard, Text, makeStyles } from '@fluentui/react-components'
import type { ComponentProps, ReactElement, JSX } from 'react'
import type { TextProps } from '@fluentui/react-components'

export interface CardProps extends Pick<ComponentProps<'div'>, 'className' | 'children'> {
    /**
     * Title
     * @default ''
     */
    title?: TextProps['children']
    /** Icon name */
    icon?: JSX.Element
}

const useStyles = makeStyles({
    card: {
        gap: '0',
    },
    title: {
        '> svg': {
            marginBottom: '-3px',
        },
    },
})

/**
 * Card item
 */
export default function Card({ title = '', icon = undefined, className, children }: CardProps): ReactElement {
    const styles = useStyles()

    return (
        <MsCard className={classNames(styles.card, className)}>
            <CardHeader
                header={
                    <Text
                        weight="semibold"
                        size={500}
                        className={classNames(styles.title)}
                    >
                        {icon} {title}
                    </Text>
                }
            />
            {title ? <span /> : undefined}
            {children}
        </MsCard>
    )
}
