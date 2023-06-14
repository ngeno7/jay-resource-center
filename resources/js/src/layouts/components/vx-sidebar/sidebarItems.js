export default [{
        url: "/dashboard",
        name: "Dashboard",
        slug: "dashboard",
        icon: "HomeIcon",
        shouldPopup: false,
    },
    {
        url: "#",
        name: "Sponsored",
        slug: "sponsored",
        icon: "UsersIcon",
        submenu: [{
            url: "/all-sponsors",
            name: "All Sponsors",
            slug: "all-sponsors",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/approved-sponsors",
            name: "Approved Sponsors",
            slug: "approved-sponsors",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/un-approved-sponsors",
            name: "Un Approved Sponsors",
            slug: "un-approved-sponsors",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/expired-sponsors",
            name: "Expired Sponsors",
            slug: "expired-sponsors",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/add-sponsor",
            name: "Add Sponsor",
            slug: "add-sponsor",
            icon: "ArrowRightIcon",
            shouldPopup: true,
        }],
    },
    {
        url: '/subscriber',
        name: 'Subscriber',
        slug: 'subscriber',
        icon: 'UsersIcon',
        shouldPopup: false,

    },
    {
        url: "#",
        name: "Resources",
        slug: "resources",
        icon: "BookOpenIcon",
        submenu: [{
            url: "/all-resources",
            name: "All Resources",
            slug: "all-resources",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/enabled-resources",
            name: "Enabled Resources",
            slug: "enabled-resources",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/disabled-resources",
            name: "Disabled Resources",
            slug: "disabled-resources",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }],
    },
    {
        url: "#",
        name: "Administrator",
        slug: "administrator",
        icon: "UserIcon",
        submenu: [{
            url: "/administrators",
            name: "Administrators",
            slug: "administrators",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/add-administrator",
            name: "add-administrator",
            slug: "administratorsPopup",
            icon: "ArrowRightIcon",
            shouldPopup: true,
        }],
    },
    {
        url: "#",
        name: "Sale Representatives",
        slug: "sale-representative",
        icon: "UserIcon",
        submenu: [{
            url: "/sale-representatives",
            name: "Sale Representative",
            slug: "sale-representative",
            icon: "ArrowRightIcon",
        }, {
            url: "/add-representative",
            name: "Add Representative",
            slug: "addRepresentativePopup",
            icon: "ArrowRightIcon",
            shouldPopup: true,
        }],
    },
    {
        url: "#",
        name: "Product Categories",
        slug: "categories",
        icon: "ArchiveIcon",
        submenu: [{
            url: "/categories",
            name: "Categories",
            slug: "categories",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            url: "/sub-categories",
            name: "Sub Categories",
            slug: "sub-categories",
            icon: "ArrowRightIcon",
            shouldPopup: false,
        }, {
            name: "Add Category",
            slug: "addCategoryPopUp",
            icon: "ArrowRightIcon",
            shouldPopup: true,
        }, {
            name: "Add Sub Category",
            slug: "addSubCategoryPopUp",
            icon: "ArrowRightIcon",
            shouldPopup: true,
        }],
    },
    {
        url: "/brands",
        name: "Brands",
        slug: "brands",
        icon: "TagIcon",
    },
    {
        url: "/industries",
        name: "Industries",
        slug: "industries",
        icon: "ActivityIcon",
    },
    {
        name: "Export Members",
        slug: "exportMembersPopup",
        icon: "ArrowRightIcon",
        shouldPopup: true,
    }
]