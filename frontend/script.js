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

// 地图和路线规划变量
let map;
let walking;
let startMarker;
let endMarker;
let currentStartPoint = "";

// 初始化地图
function initMap() {
    map = new BMap.Map("map");
    // 设置地图中心点和缩放级别
    const schoolCenter = new BMap.Point(108.837606, 34.133907);  // 108.837606,34.133907
    map.centerAndZoom(schoolCenter, 18);
    map.enableScrollWheelZoom();
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    
    // 初始化步行导航实例
    walking = new BMap.WalkingRoute(map, {
        renderOptions: { 
            map: map,
            autoViewport: true,
            enableDragging: true
        },
        onSearchComplete: walkingSearchComplete
    });

    // 绘制校园建筑物
    drawCampusBuildings();
    
    // 添加路线查询按钮事件
    document.getElementById("search-route").addEventListener("click", searchRoute);
    
    // 设置详情链接的初始状态
    updateDetailLink();
    
    // 当起点选择发生变化时更新详情链接
    document.getElementById("start-point").addEventListener("change", function() {
        currentStartPoint = this.value;
        updateDetailLink();
    });
}

// 更新详情链接
function updateDetailLink() {
    const detailLink = document.getElementById("detail-link");
    if (currentStartPoint) {
        detailLink.href = `detail.html?from=${encodeURIComponent(currentStartPoint)}`;
    } else {
        detailLink.href = "detail.html";
    }
}

// 绘制校园内的建筑物
function drawCampusBuildings() {
    for (const [name, location] of Object.entries(buildingLocations)) {
        const point = new BMap.Point(location.lng, location.lat);
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);
        
        const label = new BMap.Label(name, {
            offset: new BMap.Size(20, -10)
        });
        marker.setLabel(label);
    }
}

// 路线查询
function searchRoute() {
    const startInput = document.getElementById("start-point").value;
    const endInput = document.getElementById("end-point").value;
    
    if (!startInput) {
        alert("请选择起点宿舍楼！");
        return;
    }
    
    // 保存当前起点
    currentStartPoint = startInput;
    
    // 更新详情链接
    updateDetailLink();
    
    // 清除之前的路线
    map.clearOverlays();
    
    // 获取起点和终点坐标
    const startLocation = buildingLocations[startInput];
    const endLocation = buildingLocations[endInput];
    
    if (!startLocation || !endLocation) {
        alert("无法获取位置信息，请重试！");
        return;
    }
    
    const startPoint = new BMap.Point(startLocation.lng, startLocation.lat);
    const endPoint = new BMap.Point(endLocation.lng, endLocation.lat);
    
    // 设置起点终点标记
    startMarker = new BMap.Marker(startPoint);
    startMarker.setIcon(new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25)));
    map.addOverlay(startMarker);
    
    endMarker = new BMap.Marker(endPoint);
    endMarker.setIcon(new BMap.Icon("https://api.map.baidu.com/images/marker_red_sprite.png", new BMap.Size(23, 25)));
    map.addOverlay(endMarker);
    
    // 添加标签
    const startLabel = new BMap.Label(startInput, {
        offset: new BMap.Size(20, -10)
    });
    startMarker.setLabel(startLabel);
    
    const endLabel = new BMap.Label(endInput, {
        offset: new BMap.Size(20, -10)
    });
    endMarker.setLabel(endLabel);
    
    // 进行路线规划
    walking.search(startPoint, endPoint);
    
    // 显示简单的文字导航
    const textNavigation = document.getElementById("text-navigation");
    textNavigation.innerHTML = `<strong>导航信息：</strong><br>正在计算从 ${startInput} 到 ${endInput} 的最佳路线...`;
}

// 步行路线搜索完成回调
function walkingSearchComplete(results) {
    if (walking.getStatus() != BMAP_STATUS_SUCCESS) {
        alert("路线规划失败，请重试");
        return;
    }
    
    const plan = results.getPlan(0);
    const textNavigation = document.getElementById("text-navigation");
    
    // 根据不同起点生成不同的文字导航
    const startInput = currentStartPoint;
    let navigationText = "";
    
    switch(startInput) {
        case "海棠七号楼":
            navigationText = "<strong>导航指南：</strong><br>1. 从海棠七号楼出发，向北方向行走<br>2. 沿着校园内部道路直行<br>3. 到达B栋教学楼";
            break;
        case "海棠八号楼":
            navigationText = "<strong>导航指南：</strong><br>1. 从海棠八号楼出发，向北方向行走<br>2. 沿着校园内部道路直行<br>3. 到达B栋教学楼";
            break;
        case "海棠九号楼":
            navigationText = "<strong>导航指南：</strong><br>1. 从海棠九号楼出发，向西北方向行走<br>2. 沿着校园内部道路直行<br>3. 到达B栋教学楼";
            break;
        default:
            navigationText = "<strong>导航指南：</strong><br>请选择有效的起点";
    }
    
    // 添加路线信息
    navigationText += `<br><br>总距离: ${plan.getDistance(true)}<br>预计时间: ${plan.getDuration(true)}`;
    
    textNavigation.innerHTML = navigationText;
    
    // 保存导航信息到本地存储
    localStorage.setItem("navigationStartPoint", currentStartPoint);
}

// 页面加载完成时初始化地图
window.onload = initMap;