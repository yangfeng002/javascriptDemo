/*
  功能使用/页面访问路径
  wangfang@umeng.com
  2014.12.04
 */

$(function() {
    // Render yesterday path/table
     renderContent();

    function renderContent() {
        // Clear & Reset
        $('.nodes-group, .links-group, .steps-indicator').empty();
        $('.link.highlight').remove();
        $('.wait-load').show();
        renderPathFlow();
    }
    function renderPathFlow() {
        res = {"result":"success","data":{"name":"StartPoint","value":0,"children":[{"name":"其他","value":173,"children":[{"name":"其他","value":14,"children":[{"name":"其他","value":5,"children":[{"name":"其他","value":3,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.groups.company.home.CompanyHomeActivity","value":1,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[{"name":"其他","value":1,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":57,"children":[{"name":"其他","value":16,"children":[{"name":"其他","value":5,"children":[{"name":"其他","value":5,"children":[]}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":10,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[],"nick":""},{"name":"com.imohoo.shanpao.common.webview.MyWebViewActivity","value":1,"children":[],"nick":"H5显示页面"}],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":9,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":6,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[]}]}],"nick":"首页"}],"nick":"首页"},{"name":"cn.migu.shanpao.pedometer.StepScreenLockActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":4,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[],"nick":""}],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":7,"children":[{"name":"其他","value":1,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[{"name":"其他","value":3,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":3,"children":[],"nick":"首页"}]}],"nick":"首页"}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":2285,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""}],"nick":""}]}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":918,"children":[{"name":"其他","value":2,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[]}]}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":189,"children":[{"name":"其他","value":14,"children":[{"name":"其他","value":4,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":10,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":147,"children":[{"name":"其他","value":21,"children":[]},{"name":"com.imohoo.shanpao.common.webview.MyWebViewActivity","value":17,"children":[],"nick":"H5显示页面"},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":9,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.groups.company.home.CompanyHomeActivity","value":6,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":5,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":18,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":6,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":126,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":4,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":31,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":13,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":12,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":47,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":28,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":17,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":7,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":3,"children":[{"name":"其他","value":1,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":310,"children":[{"name":"其他","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":108,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":27,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":46,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":34,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":58,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":41,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":5,"children":[],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":372,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":87,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":15,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":8,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":34,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":13,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":6,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":13,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":3,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":115,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":41,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":25,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":26,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":5,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":12,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1981,"children":[{"name":"其他","value":110,"children":[{"name":"其他","value":42,"children":[{"name":"其他","value":36,"children":[{"name":"其他","value":14,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":15,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.groups.company.home.CompanyHomeActivity","value":6,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":56,"children":[{"name":"其他","value":15,"children":[{"name":"其他","value":4,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":10,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.common.webview.MyWebViewActivity","value":1,"children":[],"nick":"H5显示页面"}]},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":8,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":5,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}]}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":191,"children":[{"name":"其他","value":13,"children":[{"name":"其他","value":6,"children":[{"name":"其他","value":5,"children":[]}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":6,"children":[{"name":"其他","value":3,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":51,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":19,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":9,"children":[],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":5,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":2,"children":[],"nick":""}],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":22,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":12,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":4,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""}],"nick":"首页"},{"name":"cn.migu.shanpao.pedometer.StepScreenLockActivity","value":8,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}]}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":363,"children":[{"name":"其他","value":6,"children":[{"name":"其他","value":5,"children":[{"name":"其他","value":4,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":69,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[]}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":51,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":9,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":7,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":10,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":3,"children":[{"name":"其他","value":1,"children":[]}],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":212,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":34,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":11,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":6,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":47,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":7,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":4,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":33,"children":[{"name":"其他","value":8,"children":[{"name":"其他","value":4,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":6,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":"首页"}],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":12,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":8,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":3,"children":[],"nick":"首页"}],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.groups.company.home.CompanyHomeActivity","value":1,"children":[],"nick":""}],"nick":"首页"}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""}],"nick":"首页"},{"name":"cn.migu.shanpao.pedometer.StepScreenLockActivity","value":856,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[{"name":"其他","value":1,"children":[]}]}]}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":8,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"com.imohoo.shanpao.common.webview.MyWebViewActivity","value":1,"children":[],"nick":"H5显示页面"}],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":2,"children":[],"nick":""}],"nick":""}],"nick":"首页"},{"name":"cn.migu.shanpao.pedometer.StepScreenLockActivity","value":141,"children":[{"name":"其他","value":25,"children":[{"name":"其他","value":8,"children":[{"name":"其他","value":2,"children":[]}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"其他","value":1,"children":[]}],"nick":"首页"}]}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":811,"children":[{"name":"其他","value":2,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":92,"children":[{"name":"其他","value":5,"children":[{"name":"其他","value":1,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":3,"children":[],"nick":"首页"}],"nick":""}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":68,"children":[{"name":"其他","value":9,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":6,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":4,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":4,"children":[],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":5,"children":[{"name":"其他","value":2,"children":[]},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":16,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":9,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":6,"children":[],"nick":"首页"}],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":5,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity","value":1,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":79,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":40,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":3,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":6,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":2,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.groups.company.home.CompanyHomeActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":"首页"}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":11,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":1,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":9,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":3,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":2,"children":[],"nick":""}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":2,"children":[{"name":"其他","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}]},{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[{"name":"com.imohoo.shanpao.ui.home.HomeActivity","value":1,"children":[],"nick":"首页"}],"nick":"首页"}],"nick":"首页"}],"nick":"首页"},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":163,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":34,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":18,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":1,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":11,"children":[],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":10,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":4,"children":[],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":6,"children":[],"nick":""}],"nick":""}],"nick":""},{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":8,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity","value":8,"children":[{"name":"com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity","value":8,"children":[],"nick":""}],"nick":""}],"nick":""}],"nick":""},{"name":"cn.migu.shanpao.pedometer.StepScreenLockActivity","value":2,"children":[],"nick":""}],"nick":""}]},"count":[6106,2607,1681,1026,652]};
        if (res.result === "success") {
            if (res.data.children.length === 0) {
                $('.error-info').show();
                $('#chart svg').attr('height', 0);
                return false;
            }
            $('#chart svg').attr('height', 600);
            renderSteps(res.count);
            renderFlow(reformDataStruct(res.data));
        } else {
            $('#chart svg').attr('height', 0);
            $('.error-info').show();
        }
    }

});

