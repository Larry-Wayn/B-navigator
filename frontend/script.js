// 建筑物坐标
const buildingLocations = {
    "海棠七号楼": { lng: 108.839722, lat: 34.136391 },
    "海棠八号楼": { lng: 108.838763, lat: 34.13617 },
    "海棠九号楼": { lng: 108.838454, lat: 34.135646 },
    "B栋教学楼": { lng: 108.8384, lat: 34.132358 }
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
    // 设置地图中心为西安电子科技大学南校区
    const schoolCenter = new BMap.Point(108.841834, 34.130167);
    map.centerAndZoom(schoolCenter, 17);
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