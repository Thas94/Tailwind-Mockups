export const MenuService = {
    getMenuList(){
        return [{
            label: "Home",
            to: ""
        },
        {
            label: "About Us",
            to: ""
        }
            , {
            label: "Services",
            to: ""
        },
        {
            label: "Projects",
            to: ""
        },
        {
            label: "Contact Us",
            to: ""
        }]
    },

    getExploreImages(){
        return [{
            src: "/azizi/house1.jpg"
        },
        {
            src: "/azizi/house2.jpg"
        },
        {
            src: "/azizi/house3.jpg"
        }]
    },
    getCraftImages(){
        return [{
            src: "/azizi/craft1.jpg"
        },
        {
            src: "/azizi/craft2.jpg"
        },
        {
            src: "/azizi/craft3.jpg"
        }
        ,
        {
            src: "/azizi/craft4.jpg"
        }]
    }
}