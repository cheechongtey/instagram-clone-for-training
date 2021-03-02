const initialValue = {
    size: 1,
};

export const postData = [
    {
        user: {
            name: "emmett_sparling",
            avatar:
                "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/49315697_132748407639352_764801553633640448_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_ohc=gQukXcmrdCsAX8qqfq3&tp=1&oh=6f4c98d8b826aff4ed291c938587399f&oe=5FEDDC03",
            location: "The Blue Hole, Belize",
        },
        post: {
            img: [
                {
                    src: `${process.env.PUBLIC_URL}/images/pahlawan1.jpg`,
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/pahlawan2.jpg`,
                },
            ],
            title:
                "One of the craziest shoots I’ve ever done. @astrumheli wanted a shot of one of their helicopters perfectly framed in the middle of the Great Blue Hole in Belize. It took quite a while to absolutely nail it, but I think the final result was worth the effort",
            date: "20/11/2020",
            like: true,
            totalLike: 1000,
        },
    },
    {
        user: {
            name: "philippines_tourism",
            avatar: `${process.env.PUBLIC_URL}/images/php.jpg`,
            location: "Coron, Palawan",
        },
        post: {
            img: [
                {
                    src: `${process.env.PUBLIC_URL}/images/bohol1.jpg`,
                },
                {
                    src: `${process.env.PUBLIC_URL}/images/bohol2.jpg`,
                },
            ],
            title: `Clearest water of Coron 😍
            -
            -
            Follow us @philippines_best_places let's travel the Philippines 🇵🇭
            -
            -
            📷 by: @theglobewanderers`,
            date: "20/11/2020",
            like: false,
            totalLike: 2930,
        },
    },
    {
        user: {
            name: "philippines_tourism",
            avatar: `${process.env.PUBLIC_URL}/images/php.jpg`,
            location: "Nacpan Beach, Palawan",
        },
        post: {
            img: [
                {
                    src:
                        "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-15/e35/108218114_118633046588882_4180224062654915936_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=IYLK9X4TofsAX8tC_pL&tp=1&oh=a5f62c1bf7491cf5ed0df949d85aa0e7&oe=5FED67C2",
                },
            ],
            title: `Nacpan Beach 😍
            -
            -
            Follow us @philippines_best_places let's travel the Philippines 🇵🇭
            -
            -
            📷 by: @theglobewanderers`,
            date: "20/11/2020",
            like: false,
            totalLike: 10000,
        },
    },
    {
        user: {
            name: "wilderness.landscapes_",
            avatar:
                "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118558880_1028123034316336_7480965168575289225_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_ohc=_a_ZBq8oCRcAX9WnmSy&tp=1&oh=38fa0cde116c8f5b10cb1e7dae67d1cb&oe=5FEB576E",
            location: "Banff National Park",
        },
        post: {
            img: [
                {
                    src:
                        "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-15/e35/124582762_720511505228435_947251585596678545_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=4QGkdeifnscAX9SpYLR&tp=1&oh=943e054506f4dda5dd1146ed68709abc&oe=5FEEF608",
                },
            ],
            title: `Absolutely Incredible Photo Of Banff National Park In Alberta.

            Follow: @wilderness.landscapes_
            Follow: @wilderness.landscapes_
            
            Credit @mattvanswol`,
            date: "20/11/2020",
            like: true,
            totalLike: 539,
        },
    },
    {
        user: {
            name: "ohhmypassport",
            avatar:
                "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119822107_126553442192756_1713375410867107901_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_ohc=djMAcoIzio8AX82upD3&tp=1&oh=551b9e691824165fcb15840ebecdb023&oe=5FED1CA1",
            location: "Cambugahay Falls, Siquijor",
        },
        post: {
            img: [
                {
                    src:
                        "https://instagram.fkul13-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/118383435_589653738394184_3657280179231413604_n.jpg?_nc_ht=instagram.fkul13-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yY_LoQy0xRcAX-diUYm&tp=1&oh=0563324616ada1de9d08bf99aa2399b5&oe=5FEDF67A",
                },
            ],
            title: `Avant de continuer de vous partager certaines photos de notre petit trip en France cet été, je voulais vous partager l’une de mes photos favorites de notre voyage aux Philippines. C’est sur l’île de Siquijor, ma favorite, que cette photo a été prise et plus précisément à Cambugahay Falls. Je vous recommande d’y aller très tôt car à partir de 9h/9h30 il y a beaucoup de monde ! On me voit quasiment pas sur la photo d’ailleurs 🙈 je suis toute riquiqui dessus !

            Vous pouvez retrouver toutes les infos sur notre voyage aux Philippines sur mon blog.
            www.ohhmypassport.com
            
            Qu’avez-vous de prévu ce week-end ? ✨`,
            date: "20/11/2020",
            like: true,
            totalLike: 3102,
        },
    },
];

export const getPostData = (page) => {
    const size = initialValue.size,
        start = page === 1 ? 0 : parseInt((page - 1) * size),
        end = page * size - 1;

    const obj = [...postData];
    return obj.filter((value, key) => key >= start && key <= end);
};
