// 定义出发点坐标（使用拾取坐标系统）
const buildingLocations = {
    "海棠七号楼": { lng: 108.839434, lat: 34.136048 },  // 108.839434,34.136048
    "海棠八号楼": { lng: 108.839254, lat: 34.136119 },  // 108.839254,34.136119
    "海棠九号楼": { lng: 108.838455, lat: 34.135372 }, // 108.838455,34.135372
    "B栋教学楼": { lng: 108.838225, lat: 34.132495 },  // 108.838225,34.132495
    "B北口1": { lng: 108.839488, lat: 34.131726 },  // 108.839488,34.131726
    "B北口2": { lng: 108.839272, lat: 34.131834 },  // 108.839272,34.131834
    "B北口3": { lng: 108.839012, lat: 34.131939 },  // 108.839012,34.131939
    "B北口4": { lng: 108.838558, lat: 34.132152 },  // 108.838558,34.132152
    "B北口5": { lng: 108.838235, lat: 34.132271 },  // 108.838235,34.132271
    "B北口6": { lng: 108.838019, lat: 34.132346 },  // 108.838019,34.132346
    "B北口7": { lng: 108.837777, lat: 34.132466 },  // 108.837777,34.132466
    "B北口8": { lng: 108.837656, lat: 34.13251 },  // 108.837656,34.13251
    "B北口9": { lng: 108.837341, lat: 34.13269 },  // 108.837341,34.13269
    "B北口10": { lng: 108.836932, lat: 34.13285 },  // 108.836932,34.13285
    "B北口11": { lng: 108.837579, lat: 34.132652 },  // 108.837579,34.132652
    "B北口12": { lng: 108.838536, lat: 34.132346 }  // 去往北楼的小楼梯口：108.838536,34.132346
};

// 自定义小路路径定义
const customPaths = [
    {
        from: "海棠九号楼",
        to: "B北口12",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133915 },
            { lng: 108.838136, lat: 34.132727 },
            { lng: 108.838536, lat: 34.132346 }

        ],
        description: "从海棠九号楼出发,沿途中路线直接抵达B北口12,从此上至小楼梯。"
    },
    {
        from: "海棠九号楼",
        to: "B北口11",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133907 }, 
            { lng: 108.837947, lat: 34.133078 },
            { lng: 108.837579, lat: 34.132652 }
        ],
        description: "从海棠九号楼出发,沿途中路线抵达B北口11,从这里上至大平台。"
    },
    {
        from: "海棠九号楼",
        to: "B北口10",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837606, lat: 34.1339 },
            { lng: 108.837525, lat: 34.133213 }, 
            { lng: 108.837336, lat: 34.132884 },
            { lng: 108.836932, lat: 34.13285 }
        ],
        description: "从海棠九号楼出发,沿途中路线行走,穿过A楼底部走廊,抵达B北口10。"
    },
    {
        from: "海棠九号楼",
        to: "B北口9",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837606, lat: 34.1339 },
            { lng: 108.837525, lat: 34.133213 }, 
            { lng: 108.837336, lat: 34.132884 },
            { lng: 108.837341, lat: 34.13269 }
        ],
        description: "从海棠九号楼出发,沿途中路线行走,穿过A楼底部走廊,抵达B北口9。"
    },
    {
        from: "海棠九号楼",
        to: "B北口8",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133907 }, 
            { lng: 108.837947, lat: 34.133078 },
            { lng: 108.837656, lat: 34.13251 }
        ],
        description: "从海棠九号楼出发,沿途中路线抵达B北口8。"
    },
    {
        from: "海棠九号楼",
        to: "B北口7",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133907 }, 
            { lng: 108.837947, lat: 34.133078 },
            { lng: 108.837656, lat: 34.13251 },
            { lng: 108.837777, lat: 34.132466 }
        ],
        description: "从海棠九号楼出发,沿途中路线,先到达北口8,进入走廊向东行走4m,抵达B北口7。"
    },
    {
        from: "海棠九号楼",
        to: "B北口6",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133907 }, 
            { lng: 108.837947, lat: 34.133078 },
            { lng: 108.837656, lat: 34.13251 },
            { lng: 108.838019, lat: 34.132346 }
        ],
        description: "从海棠九号楼出发,沿途中路线,先到达北口8,进入走廊向东行走8m,抵达B北口6。"
    },
    {
        from: "海棠九号楼",
        to: "B北口5",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133907 }, 
            { lng: 108.837947, lat: 34.133078 },
            { lng: 108.837656, lat: 34.13251 },
            { lng: 108.838235, lat: 34.132271 }//108.838621,34.132316
        ],
        description: "从海棠九号楼出发,沿途中路线,先到达北口8,进入走廊向东行走12m,抵达B北口5。"
    },
    {
        from: "海棠九号楼",
        to: "B北口4",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.837597, lat: 34.133915 },
            { lng: 108.838136, lat: 34.132727 },
            { lng: 108.838621, lat: 34.132316 },
            { lng: 108.838558, lat: 34.132152 }
        ],
        description: "从海棠九号楼出发,沿途中路线穿过走廊,抵达B北口4。"
    },
    {
        from: "海棠九号楼",
        to: "B北口3",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.838028, lat: 34.134628 },
            { lng: 108.83889, lat: 34.13427 },
            { lng: 108.838055, lat: 34.132611 },
            { lng: 108.839115, lat: 34.132126 },
            { lng: 108.839012, lat: 34.131939 }
        ],
        description: "从海棠九号楼出发,沿途中路线,抵达B北口3。"
    },
    {
        from: "海棠九号楼",
        to: "B北口2",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.838028, lat: 34.134628 },
            { lng: 108.83889, lat: 34.13427 },
            { lng: 108.838055, lat: 34.132611 },
            { lng: 108.839115, lat: 34.132126 },
            { lng: 108.839272, lat: 34.131834 }
        ],
        description: "从海棠九号楼出发,沿途中路线,经过北口3后向东约4m,抵达B北口2。"
    },
    {
        from: "海棠九号楼",
        to: "B北口1",
        path: [
            { lng: 108.838455, lat: 34.135372 },
            { lng: 108.838028, lat: 34.134628 },
            { lng: 108.83889, lat: 34.13427 },
            { lng: 108.838055, lat: 34.132611 },
            { lng: 108.839115, lat: 34.132126 },
            { lng: 108.839488, lat: 34.131726 }
        ],
        description: "从海棠九号楼出发,沿途中路线,经过北口3后向东约8m,抵达B北口1。"
    }
];

const basePaths = customPaths;

// 定义楼栋间连接路径：使用路径继承
const buildingConnectors = {
    "海棠七号楼": [
        { 
            to: "海棠八号楼", 
            path: [
                { lng: 108.839434, lat: 34.136048 }, // 七号楼
                { lng: 108.839254, lat: 34.136119 }  // 八号楼
            ],
            desc: "向南步行至海棠八号楼"
        }
    ],
    "海棠八号楼": [
        { 
            to: "海棠九号楼", 
            path: [
                { lng: 108.839254, lat: 34.136119 }, // 八号楼
                { lng: 108.838455, lat: 34.135372 }   // 九号楼
            ],
            desc: "向南步行至海棠九号楼"
        }
    ]
};

// 定义B楼内部的教室布局图
const buildingLayout = {
    // 南楼
    "101": "B北口1",
    "105": "B北口2",
    "106": "B北口3",
    "201": "B北口1",
    "203": "B北口1",
    "206": "B北口2",
    "207": "B北口2",
    "208": "B北口4",
    "211": "B北口4",
    "216": "B北口5",
    "217": "B北口6",
    "301": "B北口1",
    "303": "B北口1",
    "306": "B北口2",
    "307": "B北口2",
    "308": "B北口4",
    "311": "B北口4",
    "312": "B北口12",  //cross 2
    "314": "B北口12",  //cross 1
    "315": "B北口12",  //cross 1
    "316": "B北口12",  //cross 1
    "318": "B北口7",
    "320": "B北口8",
    "401": "B北口1",
    "403": "B北口1",
    "406": "B北口2",
    "407": "B北口2",
    "408": "B北口4",
    "411": "B北口12",  //cross 2
    "412": "B北口12",  //cross 2
    "414": "B北口5",
    "415": "B北口5",
    "416": "B北口11",
    "418": "B北口11",
    "419": "B北口11",
    "421": "B北口11",
    "422": "B北口9",
    "425": "B北口10",
    "426": "B北口10",
    "501": "B北口1",
    "502": "B北口2",
    "503": "B北口4",
    "506": "B北口4",
    "507": "B北口4",
    "509": "B北口5",
    "510": "B北口5",
    "511": "B北口7",
    "513": "B北口12",  //corss 1
    "514": "B北口12",  //cross 1
    "516": "B北口12",  //cross 1
    "517": "B北口9",
    "520": "B北口9",
    "521": "B北口9",
    "601": "B北口5",
    "602": "B北口5",
    "603": "B北口7",
    "605": "B北口7",
    "606": "B北口7",
    "608": "B北口9",
    "609": "B北口9",
    "612": "B北口9",
    "613": "B北口9",
    "701": "B北口7",
    "703": "B北口9",
    "706": "B北口9",
    "707": "B北口9",
    // 北楼
    "529": "B北口12",
    "528": "B北口12",
    "532": "B北口12",
    "537": "B北口12",
    "538": "B北口12",
    "433": "B北口11",
    "434": "B北口12",
    "437": "B北口12",
    "442": "B北口12",
    "443": "B北口12"
};

// 教室到入口的导航说明
const roomDirections = {
    // 南楼
    "101": "从北口1进入,向东边看到的第一个教室即是101。",
    "105": "从北口2进入,向东边看到的第一个教室即是105。",
    "106": "从北口3进入,向东边看到的第一个教室即是106。",
    "201": "从北口1进入,从螺旋楼梯1上到2楼,向东边看到的第一个教室即是201。",
    "203": "从北口1进入,从螺旋楼梯1上到2楼,向西边看到的第一个教室即是203。",
    "206": "从北口2进入,从螺旋楼梯2上到2楼,向东边看到的第一个教室即是206。",
    "207": "从北口2进入,从螺旋楼梯2上到2楼,向西边看到的第一个教室即是207。",
    "208": "从北口4进入,向东边经过第一个教室211,下一个教室即是208。",
    "211": "从北口4进入,向东边看到的第一个教室即是211。",
    "216": "从北口5进入,看到的第一个教室即是216。",
    "217": "从北口6进入,看到的第一个教室即是217。",
    "301": "从北口1进入,从螺旋楼梯1上到3楼,向东边看到的第一个教室即是301。",
    "303": "从北口1进入,从螺旋楼梯1上到3楼,向西边看到的第一个教室即是303。",
    "306": "从北口2进入,从螺旋楼梯2上到3楼,向东边看到的第一个教室即是306。",
    "307": "从北口2进入,从螺旋楼梯2上到3楼,向西边看到的第一个教室即是307。",
    "308": "从北口4进入,沿着螺旋楼梯3向上走一层,向东边看到的第一个教室即是308。",
    "311": "从北口4进入,沿着螺旋楼梯3向上走一层,向西边看到的第一个教室即是311。",
    "312": "从北口12进入,沿着小楼梯向上走一层,经过北四层通道2,看到的第一个教室即是312。",
    "314": "从北口12进入,沿着小楼梯向上走一层,经过北四层通道2,看到的第一个教室即是314。",
    "315": "从北口12进入,沿着小楼梯向上走一层,经过北四层通道1,看到的第一个教室即是315。",
    "316": "从北口12进入,沿着小楼梯向上走一层,经过北四层通道1,向西走经过第一个教室315,即是316。",
    "318": "从北口7进入,看到的第一个教室即是318。",
    "320": "从北口8进入,看到的第一个教室即是320。",
    "401": "从北口1进入,从螺旋楼梯1上到4楼,向东边看到的第一个教室即是401。",
    "403": "从北口1进入,从螺旋楼梯1上到4楼,向西边看到的第一个教室即是403。",
    "406": "从北口2进入,从螺旋楼梯2上到4楼,向东边看到的第一个教室即是406。",
    "407": "从北口2进入,从螺旋楼梯2上到4楼,向西边看到的第一个教室即是407。",
    "408": "从北口4进入,沿着螺旋楼梯3向上走两层,向东边看到的第一个教室即是408。",
    "411": "从北口12进入,沿着小楼梯向上走两层,经过北五层通道2,看到的第一个教室即是411。",
    "412": "从北口12进入,沿着小楼梯向上走两层,经过北五层通道2,看到的第一个教室即是412。",
    "414": "从北口5进入,沿着螺旋楼梯4向上走两层,向西看到的第一个教室即是414。",
    "415": "从北口5进入,沿着螺旋楼梯4向上走两层,向西经过第一个教室414,即是415。",
    "416": "从北口11进入,上到大平台并进入南楼,向东经过第一个教室418,即是416。",
    "418": "从北口11进入,上到大平台并进入南楼,向东看到的第一个教室即是418。",
    "419": "从北口11进入,上到大平台并进入南楼,向西看到的第一个教室即是419。",
    "421": "从北口11进入,上到大平台并进入南楼,向西经过第一个教室419,即是421。",
    "422": "从北口9进入,沿着螺旋楼梯6向上走一层,向东看到的第一个教室即是422。",
    "425": "从北口10进入,向东边看到的第一个教室即是425。",
    "426": "从北口10进入,向西边看到的第一个教室即是426。",
    "501": "从北口1进入,从螺旋楼梯1上到5楼,向东边看到的第一个教室即是501。",
    "502": "从北口2进入,从螺旋楼梯2上到5楼,向西边看到的第一个教室即是502。",
    "503": "从北口4进入,沿着螺旋楼梯3向上走三层,向东边看到的第一个教室即是503。",
    "506": "从北口4进入,沿着螺旋楼梯3向上走三层,向西边看到的第一个教室即是506。",
    "507": "从北口4进入,沿着螺旋楼梯3向上走三层,向西边经过第一个教室506,即是507。",
    "509": "从北口5进入,沿着螺旋楼梯4向上走三层,向东看到的第一个教室即是509。",
    "510": "从北口5进入,沿着螺旋楼梯4向上走三层,向西看到的第一个教室即是510。",
    "511": "从北口7进入,沿着螺旋楼梯5向上走两层,向东边看到的第一个教室即是511。",
    "513": "从北口12进入,沿着小楼梯向上走两层,经过北五层通道1,向东边看到的第一个教室即是513。",
    "514": "从北口12进入,沿着小楼梯向上走两层,经过北五层通道1,向西边看到的第一个教室即是514。",
    "516": "从北口12进入,沿着小楼梯向上走两层,经过北五层通道1,向西边经过第一个教室514,即是516。",
    "517": "从北口9进入,沿着螺旋楼梯6向上走两层,向东看到的第一个教室即是517。",
    "520": "从北口9进入,沿着螺旋楼梯6向上走两层,向西看到的第一个教室即是520。",
    "521": "从北口9进入,沿着螺旋楼梯6向上走两层,向西经过520即是521。",
    "601": "从北口5进入,沿着螺旋楼梯4向上走三层,向东边看到的第一个教室即是601。",
    "602": "从北口5进入,沿着螺旋楼梯4向上走三层,向西边经过天台看到的教室即是602。",
    "603": "从北口7进入,沿着螺旋楼梯5向上走三层,向东边看到的第一个教室即是603。",
    "605": "从北口7进入,沿着螺旋楼梯5向上走三层,向西边看到的第一个教室即是605。",
    "606": "从北口7进入,沿着螺旋楼梯5向上走三层,向西边经过第一个教室605,即是606。",
    "608": "从北口9进入,沿着螺旋楼梯6向上走三层,向东边经过第一个教室609,即是608。",
    "609": "从北口9进入,沿着螺旋楼梯6向上走三层,向东边看到的第一个教室即是609。",
    "612": "从北口9进入,沿着螺旋楼梯6向上走三层,向西边看到的第一个教室即是612。",
    "613": "从北口9进入,沿着螺旋楼梯6向上走三层,向西边经过第一个教室612,即是613。",
    "701": "从北口7进入,沿着螺旋楼梯5向上走四层,向西边看到的第一个教室即是701。",
    "703": "从北口9进入,沿着螺旋楼梯6向上走四层,向东边看到的第一个教室即是703。",
    "706": "从北口9进入,沿着螺旋楼梯6向上走四层,向西边看到的第一个教室即是706。",
    "707": "从北口9进入,沿着螺旋楼梯6向上走四层,向西边经过第一个教室706,看到的教室即是707。",
    // 北楼
    "529": "从北口12进入,沿着小楼梯向上走两层,向西经过第一个教室532,看到的教室即是529教室。",
    "528": "从北口12进入,沿着小楼梯向上走两层,向西经过两个教室532、529,看到的教室即是528教室。",
    "532": "从北口12进入,沿着小楼梯向上走两层,向西看到的第一个教室即是532教室。",
    "537": "从北口12进入,沿着小楼梯向上走两层,向东看到的第一个教室即是537教室。",
    "538": "从北口12进入,沿着小楼梯向上走两层,向东经过537看到的教室即是538教室。",
    "433": "从北口11进入,上到大平台并进入北楼,看到的第一个教室即是433教室。",
    "434": "从北口12进入,沿着小楼梯向上走一层,向西边经过第一个教室437,看到的教室即是434教室。",
    "437": "从北口12进入,沿着小楼梯向上走一层,向西边看到的第一个教室即是437教室。",
    "442": "从北口12进入,沿着小楼梯向上走一层,向东边经过第一个教室443,看到的教室即是442教室。",
    "443": "从北口12进入,沿着小楼梯向上走一层,向东边看到的第一个教室即是443教室。"
};

// 地图和路线规划变量
let map;
let walking;
let startMarker;
let endMarker;
let currentStartPoint = "";
let currentEndPoint = "";

// 初始化地图
function initMap() {
    map = new BMap.Map("map");
    const schoolCenter = new BMap.Point(108.837606, 34.133907);  // 108.837606,34.133907
    map.centerAndZoom(schoolCenter, 18);  // 放大倍数
    map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    
    walking = new BMap.WalkingRoute(map, {
        renderOptions: { 
            map: map,
            autoViewport: true,
            enableDragging: true
        },
        onSearchComplete: walkingSearchComplete
    });

    drawCampusBuildings();
    
    document.getElementById("search-route").addEventListener("click", searchRoute);
    
    updateDetailLink();
    
    document.getElementById("start-point").addEventListener("change", function() {
        currentStartPoint = this.value;
        updateDetailLink();
    });
    
    document.getElementById("end-point").addEventListener("change", function() {
        currentEndPoint = this.value;
        updateDetailLink();
    });
}

// 更新详情链接
function updateDetailLink() {
    const detailLink = document.getElementById("detail-link");
    if (currentStartPoint && currentEndPoint) {
        detailLink.href = `detail.html?from=${encodeURIComponent(currentStartPoint)}&to=${encodeURIComponent(currentEndPoint)}`;
    } else {
        detailLink.href = "detail.html";
    }
}

// 动态路径生成器
function generateCustomPath(startBuilding, targetEntrance) {
    // 1. 检查是否直接存在路径
    const directPath = basePaths.find(p => p.from === startBuilding && p.to === targetEntrance);
    if (directPath) return directPath;

    // 2. 查找连接路径+基础路径组合
    const connectors = buildingConnectors[startBuilding];
    if (!connectors) return null;

    for (const connector of connectors) {
        const subPath = generateCustomPath(connector.to, targetEntrance);
        if (subPath) {
            return {
                from: startBuilding,
                to: targetEntrance,
                path: [...connector.path, ...subPath.path.slice(1)], // 去重连接点
                description: `${connector.desc}，然后${subPath.description}`
            };
        }
    }
    return null;
}

// 匹配自定义路径
function useCustomPathIfAvailable(start, endEntrance, map, textNavigation) {
    const dynamicPath = generateCustomPath(start, endEntrance);
    if (!dynamicPath) return false;

    const pathPoints = dynamicPath.path.map(p => new BMap.Point(p.lng, p.lat)); // 修正为 dynamicPath.path
    const polyline = new BMap.Polyline(pathPoints, {
        strokeColor: "blue",
        strokeWeight: 4,
        strokeOpacity: 0.8
    });
    map.addOverlay(polyline);

    const startMarker = new BMap.Marker(pathPoints[0]);
    const endMarker = new BMap.Marker(pathPoints[pathPoints.length - 1]);
    map.addOverlay(startMarker);
    map.addOverlay(endMarker);

    map.setViewport(pathPoints);

    textNavigation.innerHTML = `<strong>室外导航：</strong><br>${dynamicPath.description}`;
    return true;
}

// 主体导航逻辑
function searchRoute() {
    const startInput = document.getElementById("start-point").value;
    const endInput = document.getElementById("end-point").value;

    if (!startInput) {
        alert("请选择起点宿舍楼！");
        return;
    }

    if (!endInput) {
        alert("请选择目标教室！");
        return;
    }

    currentStartPoint = startInput;
    currentEndPoint = endInput;

    updateDetailLink();
    map.clearOverlays();

    const entrancePoint = buildingLayout[endInput];
    const textNavigation = document.getElementById("text-navigation");

    if (!entrancePoint) {
        alert("无法确定该教室的入口，请重试！");
        return;
    }

    const startLocation = buildingLocations[startInput];
    const entranceLocation = buildingLocations[entrancePoint];

    if (!startLocation || !entranceLocation) {
        alert("无法获取位置信息，请重试！");
        return;
    }

    const startPoint = new BMap.Point(startLocation.lng, startLocation.lat);
    const entrancePoint2 = new BMap.Point(entranceLocation.lng, entranceLocation.lat);

    // 优先使用自定义路径
    if (useCustomPathIfAvailable(startInput, entrancePoint, map, textNavigation)) {
        localStorage.setItem("navigationStartPoint", currentStartPoint);
        localStorage.setItem("navigationEndPoint", currentEndPoint);
        localStorage.setItem("entrancePoint", entrancePoint);
        localStorage.setItem("roomDirection", roomDirections[currentEndPoint] || "");
        return;
    }

    // 百度 API 路径规划
    startMarker = new BMap.Marker(startPoint);
    startMarker.setIcon(new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25)));
    map.addOverlay(startMarker);

    endMarker = new BMap.Marker(entrancePoint2);
    endMarker.setIcon(new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25)));
    map.addOverlay(endMarker);

    const startLabel = new BMap.Label(startInput, { offset: new BMap.Size(20, -10) });
    const endLabel = new BMap.Label(entrancePoint, { offset: new BMap.Size(20, -10) });

    startMarker.setLabel(startLabel);
    endMarker.setLabel(endLabel);

    walking.search(startPoint, entrancePoint2);

    textNavigation.innerHTML = `<strong>导航信息：</strong><br>正在计算从 ${startInput} 到 ${endInput} 教室的最佳路线...`;
}

// 百度API路径结果处理
function walkingSearchComplete(results) {
    if (walking.getStatus() != BMAP_STATUS_SUCCESS) {
        alert("路线规划失败，请重试");
        return;
    }

    const plan = results.getPlan(0);
    const entrancePoint = buildingLayout[currentEndPoint];
    const roomDirectionText = roomDirections[currentEndPoint] || "未找到该教室的详细导航";
    const textNavigation = document.getElementById("text-navigation");

    // 提取路线步骤详细说明
    let stepsDescription = "";
    const routes = plan.getRoute(0); // 获取第一条路线
    const steps = routes.getSteps(); // 从路线中获取步骤
    for (let j = 0; j < steps.length; j++) {
        let description = steps[j].getDescription();
        description = description.replace(/<[^>]+>/g, ''); // 去除 HTML 标签
        stepsDescription += (j + 1) + ". " + description + "<br>";
    }

    // 更新导航文字，包含详细步骤
    let navigationText = `<strong>室外导航指南：</strong><br>总距离: ${plan.getDistance(true)}<br>预计时间: ${plan.getDuration(true)}<br><br><strong>详细步骤：</strong><br>${stepsDescription}`;
    textNavigation.innerHTML = navigationText;

    localStorage.setItem("navigationStartPoint", currentStartPoint);
    localStorage.setItem("navigationEndPoint", currentEndPoint);
    localStorage.setItem("entrancePoint", entrancePoint);
    localStorage.setItem("roomDirection", roomDirectionText);
}

// 绘制校园建筑标签
function drawCampusBuildings() {
    for (const [name, location] of Object.entries(buildingLocations)) {
        const point = new BMap.Point(location.lng, location.lat);
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);
        const label = new BMap.Label(name, { offset: new BMap.Size(20, -10) });
        marker.setLabel(label);
    }
}

window.onload = initMap;