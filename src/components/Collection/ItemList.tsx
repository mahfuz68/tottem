import * as React from 'react'
import { Box, Image } from 'grommet'
import { Item, imageShapes } from '../../types'
import styled from 'styled-components'
import { ElementTitle, ElementAuthor } from '../Typography'

interface IItemListProps {
    items: Item[]
}

const ItemImage = styled(Image)`
    width: 160px;
    border-radius: ${(props: { radius: string }) => props.radius};
    border: solid 0.5px #ededed;

    @media screen and (max-width: 600px) {
        width: 120px;
    }
`
const Pictogram = styled(Box)`
    flex-shrink: 0;
    height: 30px;
    justify-content: center;
    align-content: center;
    width: 30px;
    background-color: #6faa9c;
    border-radius: 50%;
`

const CollectionCard = styled(Box)`
    border-radius: 6px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 812px) {
        box-shadow: none;
        border-radius: 0px;
        border-top: 1px #dddddd solid;
        border-bottom: 1px #dddddd solid;
    }
`

const ItemBox = styled(Box)`
    height: ${(props: { square: boolean }) =>
        props.square ? '160px' : 'auto'};
    @media screen and (max-width: 600px) {
        height: ${(props: { square: boolean }) =>
            props.square ? '120px' : 'auto'};
    }
`

const ContentBox = styled(Box)`
    margin: 40px 0px 40px 0px;
    padding: 0px 48px 0px 48px;
    width: 100%;
    @media screen and (max-width: 812px) {
        margin-top: 24px;
        padding-right: 0px;
        padding-left: 0px;
    }
`

const ItemList: React.FunctionComponent<IItemListProps> = props => {
    return (
        <ContentBox>
            <CollectionCard background="white" pad="large">
                {props.items.map(item => {
                    return (
                        <Box
                            responsive={false}
                            key={item.title}
                            direction="row"
                            margin={{ bottom: 'large' }}
                        >
                            <ItemBox
                                direction="row"
                                width="100%"
                                justify="between"
                                square={imageShapes[item.type] !== 'rectangle'}
                            >
                                <Box direction="row">
                                    <a
                                        href={item.productUrl}
                                        target="_blank"
                                        style={{ display: 'flex ' }}
                                    >
                                        <ItemImage
                                            src={item.imageUrl}
                                            fit="cover"
                                            radius={
                                                imageShapes[item.type] ===
                                                'circle'
                                                    ? '50%'
                                                    : '4px'
                                            }
                                        />
                                    </a>
                                    <Box margin={{ horizontal: 'large' }}>
                                        <ElementTitle
                                            href={item.productUrl}
                                            target="_blank"
                                        >
                                            {item.title}
                                        </ElementTitle>
                                        <ElementAuthor>
                                            {item.author}
                                        </ElementAuthor>
                                    </Box>
                                </Box>
                                <Pictogram>
                                    <img
                                        src={`/pictograms/${item.type}-white.svg`}
                                        height="16px"
                                    />
                                </Pictogram>
                            </ItemBox>
                        </Box>
                    )
                })}
            </CollectionCard>
        </ContentBox>
    )
}

export default ItemList