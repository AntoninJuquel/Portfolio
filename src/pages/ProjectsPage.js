import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Hero from '../components/Hero';
import Card from '../components/Card';

function ProjectsPage({ goToContent }) {

    useEffect(() => goToContent(), [])

    const [items, setItems] = useState(
        [
            {
                categorie: 'Applications mobile',
                projects:
                    [
                        {
                            id: 0,
                            title: 'Sephora Lips',
                            subTitle: 'Appli de e-comerce cosmétique',
                            imgSrc: 'https://www.shopcyco.com/upload/article/20200402/b7f8a8e8e66ece570e02eb30dd157c00.jpg',
                            link: 'https://github.com/AntoninJuquel/Sephora-Lips/tree/master',
                            selected: false,
                            categorieIndex: 0
                        },
                        {
                            id: 1,
                            title: 'CheatAlleycats',
                            subTitle: 'Calculateur de trajets',
                            imgSrc: 'https://img-fotki.yandex.ru/get/5904/svezduh.5f/0_62d4a_13f4f01_XL',
                            link: 'https://github.com/AntoninJuquel/Cheat_Alleycat',
                            selected: false,
                            categorieIndex: 0
                        },
                    ]
            },
            {
                categorie: 'Jeux videos',
                projects:
                    [
                        {
                            id: 0,
                            title: 'Crazy lights',
                            subTitle: 'Bullet hell',
                            imgSrc: 'https://img.itch.zone/aW1nLzMzMzY5MTMucG5n/315x250%23c/%2FEjA15.png',
                            link: 'https://somindras.itch.io/crazy-lights',
                            selected: false,
                            categorieIndex: 1
                        },
                        {
                            id: 1,
                            title: 'Island invasion',
                            subTitle: 'Tower defense',
                            imgSrc: 'https://img.itch.zone/aW1nLzM0MzAxMDkucG5n/315x250%23c/zfBCp1.png',
                            link: 'https://somindras.itch.io/island-invasion',
                            selected: false,
                            categorieIndex: 1
                        },
                        {
                            id: 2,
                            title: 'Train your mind',
                            subTitle: 'Puzzle game',
                            imgSrc: 'https://img.itch.zone/aW1nLzM1OTk5MzAucG5n/315x250%23c/5IOjSk.png',
                            link: 'https://somindras.itch.io/train-your-mind',
                            selected: false,
                            categorieIndex: 1
                        },
                        {
                            id: 3,
                            title: 'Cupgrade',
                            subTitle: 'Roguelike',
                            imgSrc: 'https://img.itch.zone/aW1nLzM3MjMwMDcucG5n/315x250%23c/FRfmbU.png',
                            link: 'https://somindras.itch.io/cupgrade',
                            selected: false,
                            categorieIndex: 1
                        },
                    ]
            },
            {
                categorie: 'Sites web',
                projects:
                    [
                        {
                            id: 0,
                            title: 'Finger dice',
                            subTitle: 'Roll the dice',
                            imgSrc: 'https://antoninjuquel.github.io/fingerdice/images/dice6.png',
                            link: 'https://antoninjuquel.github.io/fingerdice/',
                            selected: false,
                            categorieIndex: 2
                        },
                        {
                            id: 1,
                            title: 'Simon',
                            subTitle: 'Classic simon game',
                            imgSrc: 'https://p1.hiclipart.com/preview/138/573/156/simon-area-game-simon-says-smile-smiley-circle-symbol-png-clipart.jpg',
                            link: 'https://antoninjuquel.github.io/simon/',
                            selected: false,
                            categorieIndex: 2
                        },
                        {
                            id: 2,
                            title: 'Drumkit',
                            subTitle: 'Make your music',
                            imgSrc: 'https://image.flaticon.com/icons/svg/860/860162.svg',
                            link: 'https://antoninjuquel.github.io/drumkit/',
                            selected: false,
                            categorieIndex: 2
                        },
                        {
                            id: 3,
                            title: 'Tin dog',
                            subTitle: 'Social media for dogs',
                            imgSrc: 'https://image.flaticon.com/icons/svg/616/616408.svg',
                            link: 'https://antoninjuquel.github.io/tindog/',
                            selected: false,
                            categorieIndex: 2
                        },
                        {
                            id: 4,
                            title: 'Facebook form copy',
                            subTitle: 'Test for uballers',
                            imgSrc: 'https://image.flaticon.com/icons/svg/725/725289.svg',
                            link: 'https://antoninjuquel.github.io/test-for-Uballers/',
                            selected: false,
                            categorieIndex: 2
                        },
                    ]
            },
        ]
    )

    const mySetItems = (projects) => {
        let newItems = [...items]

        newItems[projects[0].categorieIndex].projects = projects

        setItems(newItems)
    }

    const renderItems = (items) => {
        return items.map(item => {
            return (
                <Col key={item.id} className='my-center' xl={3} lg={6} md={6} sm={12}>
                    <Card items={items} item={item} setItems={mySetItems} />
                </Col>
            )
        })
    }

    const renderCategories = () => {
        return items.map(item => {
            return (
                <div key={item.categorie}>
                    <Hero subTitle={item.categorie} />
                    <Row>
                        {renderItems(item.projects)}
                    </Row>
                </div>
            )
        })
    }

    return (
        <div>
            {renderCategories()}
        </div>
    )
}

export default ProjectsPage