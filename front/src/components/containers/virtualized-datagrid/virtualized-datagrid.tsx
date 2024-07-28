import { DataGridHeader, DataGridCell, DataGridHeaderCell } from '@fluentui/react-data-grid-react-window';
import { Text, useScrollbarWidth, useFluent, makeStyles } from '@fluentui/react-components';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { DataGrid, DataGridBody, DataGridRow } from '@fluentui-contrib/react-data-grid-react-window';
import { useMount } from 'react-use';
import classNames from 'classnames';
import { IDLE, PENDING, REJECTED, RESOLVED } from '../../../requests/models/status';
// import { Loader } from 'components/elements';
import type { Status } from '../../../requests/models/status';
import type { DataGridProps, TableColumnDefinition } from '@fluentui/react-components';

export type VirtualizedDatagridProps<T> = {
    /** Items */
    items: Array<T>;
    /** Columns */
    columns: Array<TableColumnDefinition<T>>;
    /** Height */
    height?: number;
    /** Page link */
    pathLink?: (item: T) => string;
    /** Status */
    status: Status;
    /**
     * Whether the table is sortable
     * @default true
     */
    sortable?: DataGridProps['sortable'];
    /**
     * Enables column resizing
     * @default true
     */
    resizableColumns?: DataGridProps['resizableColumns'];
    /**
     * How focus navigation will work in the datagrid
     * @default 'row_unstable'
     */
    focusMode?: DataGridProps['focusMode'];
} & Omit<DataGridProps, 'sortable' | 'resizableColumns' | 'focusMode' | 'items' | 'columns'>;

const useVirtualizedDatagridStyles = makeStyles({
    'is-odd': {
        backgroundColor: '#fafbfa',
    },
});

/**
 * VirtualizedDatagrid
 */
export default function VirtualizedDatagrid<T>({
    height: heightProps = undefined,
    pathLink = undefined,
    sortable = true,
    resizableColumns = true,
    focusMode = 'row_unstable',
    status,
    items,
    columns = [],
    ...props
}: VirtualizedDatagridProps<T>) {
    const { targetDocument } = useFluent();
    const scrollbarWidth = useScrollbarWidth({ targetDocument });
    const virtualizedDatagridStyles = useVirtualizedDatagridStyles();

    const ref = useRef<HTMLDivElement>(null);

    const [height, setHeight] = useState(500);

    useMount(() => {
        // Size of screen - (offset to top + distance component to top screen) - padding card - padding main - height header
        const newHeight = window.innerHeight - (window.scrollY + (ref.current?.getBoundingClientRect().top ?? 0)) - 20 - 28 - 33;
        setHeight(newHeight > 500 ? newHeight : 500);
    });

    return (
        <DataGrid
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            columns={columns}
            ref={ref}
            items={items}
            sortable={sortable}
            resizableColumns={resizableColumns}
            focusMode={focusMode}
        >
            <DataGridHeader style={{ paddingRight: scrollbarWidth }}>
                <DataGridRow>{({ renderHeaderCell }) => <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>}</DataGridRow>
            </DataGridHeader>
            {status === PENDING && (
                <Text
                    // Height minus margin (1rem)
                    style={{ margin: '1em 0 0 1em', height: height - 14, padding: '2rem 0 0' }}
                    block
                    italic
                >
                    {/* <Loader
                        hasDelay
                        size="huge"
                    /> */}
                </Text>
            )}
            {status === IDLE && (
                <Text
                    // Height minus margin (1rem)
                    style={{ margin: '1em 0 0 1em', height: height - 14 }}
                    block
                    italic
                >
                    Veuillez faire une recherche
                </Text>
            )}
            {[RESOLVED, REJECTED].includes(status) && !items?.length && (
                <Text
                    // Height minus margin (1rem)
                    style={{ margin: '1em 0 0 1em', height: height - 14 }}
                    block
                    italic
                >
                    Aucun résultat trouvé
                </Text>
            )}
            {[RESOLVED, REJECTED].includes(status) && !!items?.length && (
                <DataGridBody
                    itemSize={45}
                    height={heightProps ?? height}
                >
                    {({ item, rowId }, style) =>
                        pathLink ? (
                            <Link
                                to={{
                                    pathname: pathLink(item as T),
                                }}
                                /* eslint-disable capitalized-comments */
                                // onClick={ev => {
                                //     const target = ev.target as HTMLElement
                                //     if (target.closest('button') || target.nodeName.toLowerCase() === 'button')
                                //         ev.preventDefault()
                                // }}
                                /* eslint-enable capitalized-comments */
                            >
                                <DataGridRow
                                    key={rowId}
                                    style={style}
                                    className={classNames({ [virtualizedDatagridStyles['is-odd']]: (rowId as number) % 2 === 1 })}
                                >
                                    {({ renderCell, columnId }) => (
                                        <DataGridCell>
                                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                            {renderCell?.(item) || (item as any)[columnId]}
                                        </DataGridCell>
                                    )}
                                </DataGridRow>
                            </Link>
                        ) : (
                            <DataGridRow
                                key={rowId}
                                style={style}
                                className={classNames({ [virtualizedDatagridStyles['is-odd']]: (rowId as number) % 2 === 1 })}
                            >
                                {({ renderCell, columnId }) => (
                                    <DataGridCell>
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                        {renderCell?.(item) || (item as any)[columnId]}
                                    </DataGridCell>
                                )}
                            </DataGridRow>
                        )
                    }
                </DataGridBody>
            )}
        </DataGrid>
    );
}
