var app = angular.module("myModule", []);

app.controller("ContactCtrl", ContactCtrl);

function ContactCtrl() {
    this.contacts=[

            {
                "gender": "male",
                "name": {
                    "title": "mr",
                    "first": "romain",
                    "last": "hoogmoed"
                },
                "location": {
                    "street": "1861 jan pieterszoon coenstraat",
                    "city": "maasdriel",
                    "state": "zeeland",
                    "postcode": 69217
                },
                "email": "romain.hoogmoed@example.com",
                "login": {
                    "username": "lazyduck408",
                    "password": "jokers",
                    "salt": "UGtRFz4N",
                    "md5": "6d83a8c084731ee73eb5f9398b923183",
                    "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
                    "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
                },
                "dob": "1983-07-14 07:29:45",
                "registered": "2010-09-24 02:10:42",
                "phone": "(656)-976-4980",
                "cell": "(065)-247-9303",
                "id": {
                    "name": "BSN",
                    "value": "04242023"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/83.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
                },
                "nat": "NL"
            },
        { "gender": "male", "name": { "title": "mr", "first": "mylan", "last": "bernard" }, "location": { "street": "9280 rue saint-georges", "city": "dunkerque", "state": "manche", "postcode": 67893 }, "email": "mylan.bernard@example.com", "login": { "username": "ticklishmouse297", "password": "vauxhall", "salt": "nqWh0mNx", "md5": "583dd3929bb60e2741d5ab753d28e552", "sha1": "a94526d877406f54340b24728db84d74366a95fc", "sha256": "73407a4353d2343812061e1b914fd572894c72c298b4d9c004d2679d4cfc1b21" }, "dob": "1952-09-04 15:16:34", "registered": "2014-09-12 15:12:35", "phone": "01-88-25-73-96", "cell": "06-34-80-13-70", "id": { "name": "INSEE", "value": "152809070247 11" }, "picture": { "large": "https://randomuser.me/api/portraits/men/26.jpg", "medium": "https://randomuser.me/api/portraits/med/men/26.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/26.jpg" }, "nat": "FR" },
        { "gender": "male", "name": { "title": "mr", "first": "randall", "last": "hayes" }, "location": { "street": "6519 james st", "city": "bendigo", "state": "south australia", "postcode": 7409 }, "email": "randall.hayes@example.com", "login": { "username": "blacksnake623", "password": "guess", "salt": "myLt2eC6", "md5": "53cc7b435694b5ee340d8dd1fc8cd04c", "sha1": "9853b5d7d2d21d3cd98848c02bdc156b998d4781", "sha256": "39e5e74e9c2bbc39d44177b9f60799f3404ebb8c369291007b09a0194cea9d83" }, "dob": "1948-09-10 16:21:34", "registered": "2012-02-24 04:02:35", "phone": "06-0393-0261", "cell": "0477-412-181", "id": { "name": "TFN", "value": "890262691" }, "picture": { "large": "https://randomuser.me/api/portraits/men/56.jpg", "medium": "https://randomuser.me/api/portraits/med/men/56.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg" }, "nat": "AU" },
        { "gender": "male", "name": { "title": "monsieur", "first": "kenzo", "last": "meyer" }, "location": { "street": "7358 avenue du fort-caire", "city": "morges 1", "state": "st. gallen", "postcode": 4162 }, "email": "kenzo.meyer@example.com", "login": { "username": "silvermouse136", "password": "records", "salt": "L4tJjJSW", "md5": "270a62efddc6aa6325ffafdedae925ac", "sha1": "026fc71f6cb59ff6b8e6b1c42094c04dd8241635", "sha256": "348de95dbdfc5f7414fad3c9002dba174d083a3f338a147e1aa28d0aa6156b73" }, "dob": "1970-11-03 11:30:22", "registered": "2006-09-25 08:46:39", "phone": "(959)-217-9194", "cell": "(507)-656-3735", "id": { "name": "AVS", "value": "756.SBWR.LSQN.99" }, "picture": { "large": "https://randomuser.me/api/portraits/men/96.jpg", "medium": "https://randomuser.me/api/portraits/med/men/96.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg" }, "nat": "CH" },
        { "gender": "female", "name": { "title": "mrs", "first": "abbey", "last": "graves" }, "location": { "street": "8597 mill road", "city": "laytown-bettystown-mornington", "state": "louth", "postcode": 12983 }, "email": "abbey.graves@example.com", "login": { "username": "bigsnake111", "password": "chelsea", "salt": "NCBq6kb6", "md5": "01d93c2ce87709ad4bab0ad1206abe32", "sha1": "c33ab78af0d2835e0ea3085eb883c032339b54dc", "sha256": "bb82f631a6d13cfe75b37c5f2988265186c227a61e121a2d22bf3e0afcfc8c3c" }, "dob": "1984-07-03 05:35:39", "registered": "2010-03-16 04:59:50", "phone": "031-286-0440", "cell": "081-402-3605", "id": { "name": "PPS", "value": "1125371T" }, "picture": { "large": "https://randomuser.me/api/portraits/women/88.jpg", "medium": "https://randomuser.me/api/portraits/med/women/88.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg" }, "nat": "IE" },
        { "gender": "male", "name": { "title": "mr", "first": "max", "last": "johnson" }, "location": { "street": "7670 madras street", "city": "blenheim", "state": "southland", "postcode": 36827 }, "email": "max.johnson@example.com", "login": { "username": "lazyrabbit201", "password": "satan666", "salt": "P6peqV6Z", "md5": "e940c72f866a088d4f8ebf61c191c5ab", "sha1": "7db24132b5d6d3775abb3e20eeaba3c017c9284a", "sha256": "546d6c1fe4b18177401857760b015439a3fa83a6dddc0adaa9bd9e455452e5ed" }, "dob": "1979-09-26 22:19:45", "registered": "2016-06-12 16:22:34", "phone": "(042)-731-8869", "cell": "(302)-332-8596", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/79.jpg", "medium": "https://randomuser.me/api/portraits/med/men/79.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg" }, "nat": "NZ" },
        { "gender": "female", "name": { "title": "mrs", "first": "chloe", "last": "singh" }, "location": { "street": "1966 arctic way", "city": "aylmer", "state": "nova scotia", "postcode": 31543 }, "email": "chloe.singh@example.com", "login": { "username": "purpleostrich412", "password": "gunners", "salt": "yx49EkOm", "md5": "381b3d86331a24bb1aacca80daaea8a9", "sha1": "2cdab9be31ee85e06cec8d9753b923198e103ee1", "sha256": "99078382dc32850b3e76656a44b8a8ccf4940247171a3ff97700209649039e48" }, "dob": "1950-11-27 08:15:55", "registered": "2012-08-21 15:52:44", "phone": "550-275-9987", "cell": "652-444-8341", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/34.jpg", "medium": "https://randomuser.me/api/portraits/med/women/34.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg" }, "nat": "CA" },
        { "gender": "male", "name": { "title": "mr", "first": "brad", "last": "vasquez" }, "location": { "street": "6439 park avenue", "city": "bangor", "state": "grampian", "postcode": "IR9R 7HL" }, "email": "brad.vasquez@example.com", "login": { "username": "redfish567", "password": "tuan", "salt": "hbqE4pOo", "md5": "b53e445755ffc96ed910cfcca2fda16c", "sha1": "04213ece348487cbecea0b51b770c6393e362902", "sha256": "f2c8b0d8cb1cfd95ce985b39d7424b78d7bfbacea261f7e1c28da4a202ea40e6" }, "dob": "1979-05-03 19:37:01", "registered": "2006-08-10 09:11:15", "phone": "015394 42213", "cell": "0719-127-653", "id": { "name": "NINO", "value": "RK 04 02 56 W" }, "picture": { "large": "https://randomuser.me/api/portraits/men/45.jpg", "medium": "https://randomuser.me/api/portraits/med/men/45.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg" }, "nat": "GB" },
        { "gender": "male", "name": { "title": "mr", "first": "felix", "last": "mitchell" }, "location": { "street": "8491 arctic way", "city": "armstrong", "state": "nova scotia", "postcode": 20664 }, "email": "felix.mitchell@example.com", "login": { "username": "heavyladybug439", "password": "ambers", "salt": "Kx2SXeAf", "md5": "9091a6df52181b0d4275905d3fbc4286", "sha1": "afa08b9ec1cab50b20c6a0d74c14a5740925ff55", "sha256": "0488ddc5f82007a60a5b5a9b83273b1aa561523788ee152ebf77b2eb380dbfa7" }, "dob": "1946-06-19 13:49:18", "registered": "2015-06-25 20:49:26", "phone": "977-776-4956", "cell": "533-012-1284", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/1.jpg", "medium": "https://randomuser.me/api/portraits/med/men/1.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg" }, "nat": "CA" }

        
    ];
    
    // Lets change the controller to use the $scope parameter.
    var myApp = angular.module("myModule", [])
                        .controller("myController", function($scope){
                        $scope.message = "Cavs are damn fucking stupid!"
                        });
}
