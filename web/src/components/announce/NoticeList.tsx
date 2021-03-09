import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Button, Table, Label, Icon, Grid, Form } from 'semantic-ui-react';

import { NoticeContext } from '../../Context' 


function clamp(x: number, min: number, max: number) {
    return Math.max(Math.min(x, max), min);
}

function cap_str_length(str: string, len: number) {
    if (str.length > len) {
        return str.substr(0, len - 3) + "...";
    }
    else {
        return str;
    }
}

function make_clamped_sublist_of_indices(center_index: number, domain_list_size: number, sub_list_size: number) {
    const result: number[] = [];

    if (sub_list_size > domain_list_size) {
        for (let i = 0; i < domain_list_size; ++i) {
            result.push(i);
        }
        return result;
    }
    else {
        let left_index = clamp(center_index, 0, domain_list_size - 1);
        let right_index = left_index + 1;

        while (true) {
            if (result.length >= sub_list_size) {
                return result;
            }

            if (left_index >= 0) {
                result.unshift(left_index);
                --left_index;
            }

            if (result.length >= sub_list_size) {
                return result;
            }

            if (right_index < domain_list_size) {
                result.push(right_index);
                ++right_index;
            }
        }
    }
}

const NoticeList = () => {
    const {list} = React.useContext<INoticeContext>(NoticeContext);
    const[listPageSize, setListPageSize] = React.useState<number>(6);
    const[listCurrentPage, setListCurrentPage] = React.useState<number>(0);
    const[paginatorShowCount, setPaginatorShowCount] = React.useState<number>(3);

    const calcTotalPagesCount = () => {
        return Math.ceil(list.length / listPageSize);
    }

    const setCurrentListPage = (pageIndex: number) => {
        const totalPagesCount = calcTotalPagesCount();

        if (pageIndex >= totalPagesCount) {
            pageIndex = totalPagesCount - 1;
        }
        else if (pageIndex < 0) {
            pageIndex = 0;
        }

        setListCurrentPage(pageIndex);
    }

    const buildElement_rowList = () => {
        const tableRows: JSX.Element[] = [];
        const begin_index = listPageSize * listCurrentPage;
        const end_index = listPageSize * (listCurrentPage + 1);
        for (let i = begin_index; i < end_index; ++i) {
            const one_element = list[list.length - i - 1];
            if (undefined === one_element) {
                continue;
            }

            tableRows.push(
                <Table.Row key={`announce_row_${one_element.id}`}>
                    <Table.Cell width={7}>
                        <Label
                            key = {one_element.id}
                            as = {NavLink}
                            to = {`/announcements/page/${one_element.id}`}
                        >
                            {cap_str_length(one_element.title, 128)}
                        </Label>
                    </Table.Cell>
                    <Table.Cell width={2}>{one_element.writer.name}</Table.Cell>
                    <Table.Cell width={2}>{one_element.date}</Table.Cell>
                </Table.Row>
            )
        }

        return tableRows;
    }

    const buildElement_paginator = () => {
        const paginatorBtnList: JSX.Element[] = [];
        const totalPagesCount = calcTotalPagesCount();
        const displayIndices = make_clamped_sublist_of_indices(
            listCurrentPage,
            totalPagesCount,
            paginatorShowCount
        );

        for (let i of displayIndices) {
            paginatorBtnList.push(
                <Menu.Item
                    as='a'
                    key={`paginator_btn_${i}`}
                    name={`page_btn_${i}`}
                    active={listCurrentPage === i}
                    onClick={() => setCurrentListPage(i)}
                >{i + 1}</Menu.Item>
            );
        }

        return paginatorBtnList;
    }

    const tableRows = buildElement_rowList();
    const paginatorBtnList = buildElement_paginator();

    if (list === undefined) {
        return <></>;
    }

    return (
        <div>
            <h1>공지 사항</h1>

            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item
                                icon
                                as='a'
                                name={`page_btn_left`}
                                onClick={() => setCurrentListPage(listCurrentPage - 1)}
                            >
                                <Icon name='chevron left' />
                            </Menu.Item>

                            {paginatorBtnList}

                            <Menu.Item
                                icon
                                as='a'
                                name={`page_btn_left`}
                                onClick={() => setCurrentListPage(listCurrentPage + 1)}
                            >
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>제목</Table.HeaderCell>
                        <Table.HeaderCell>글쓴이</Table.HeaderCell>
                        <Table.HeaderCell>날짜</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{tableRows}</Table.Body>
            </Table>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <input placeholder="검색어" />
                                </Form.Field>
                                <Form.Button content="검색" attached="right" />
                            </Form.Group>
                        </Form>
                    </Grid.Column>

                    <Grid.Column width={4} textAlign="right">
                        <Button
                            key = "post"
                            as = {Link}
                            to = { '/announcements/post' }
                        >글쓰기</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export { NoticeList }