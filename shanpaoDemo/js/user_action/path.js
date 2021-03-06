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
        res ={
            result:"success",
            "data": {
                "children": [
                    {
                        "children": [

                        ],
                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                        "value": "33"
                    },
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                        "value": "25"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                "value": "35"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                        "value": "87"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.common.webview.CampaignActivity",
                                                        "value": "25"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "64"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity",
                                        "value": "81"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                        "value": "23"
                                                    },
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "26"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                "value": "50"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                        "value": "69"
                                    }
                                ],
                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                "value": "283"
                            },
                            {
                                "children": [

                                ],
                                "name": "com.imohoo.shanpao.common.webview.MyWebViewActivity",
                                "value": "39"
                            },
                            {
                                "children": [

                                ],
                                "name": "com.imohoo.shanpao.ui.first.StartupActivity",
                                "value": "24"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [

                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.motionresult.MotionResultActivity",
                                                "value": "28"
                                            },
                                            {
                                                "children": [

                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "34"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.motionrecord.SportRecordActivity",
                                        "value": "72"
                                    },
                                    {
                                        "children": [

                                        ],
                                        "name": "com.imohoo.shanpao.ui.training.TrainingNormalDetailActivity",
                                        "nick": "è®­ç»ƒè¯¦æƒ…é¡µ",
                                        "value": "7"
                                    },
                                    {
                                        "children": [

                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.runassess.activity.RunAssessGuideActivity",
                                        "value": "21"
                                    },
                                    {
                                        "children": [

                                        ],
                                        "name": "com.imohoo.shanpao.ui.person.PeopleDetailsActivity",
                                        "value": "21"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [

                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "25"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.first.StartupActivity",
                                        "value": "26"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "38"
                                                    },
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                        "value": "65"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                "value": "113"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                        "value": "28"
                                                    },
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "29"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "77"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                        "value": "257"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "73"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "114"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.common.webview.MyWebViewActivity",
                                        "value": "128"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                        "value": "301"
                                                    },
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "35"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                "value": "345"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "37"
                                                    },
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.ScreenLockActivity",
                                                        "value": "190"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                "value": "242"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                        "value": "663"
                                    },
                                    {
                                        "children": [

                                        ],
                                        "name": "com.imohoo.shanpao.ui.setting.SettingActivity",
                                        "value": "17"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [

                                                ],
                                                "name": "com.imohoo.shanpao.ui.im.ui.RIM_ConversationActivity",
                                                "value": "24"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.ui.im.ui.RIM_ConversationListActvity",
                                        "value": "31"
                                    },
                                    {
                                        "children": [

                                        ],
                                        "name": "com.imohoo.shanpao.ui.medal.ui.MedalInfoActivity",
                                        "nick": "æˆ‘-å‹‹ç« é¦†-å…·ä½“å‹‹ç« åŽçš„é¡µé¢",
                                        "value": "11"
                                    },
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.motion.outdoorrunandride.activity.RunningAndRidingActivity",
                                                        "value": "25"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                "value": "62"
                                            }
                                        ],
                                        "name": "com.imohoo.shanpao.common.webview.CampaignActivity",
                                        "value": "78"
                                    }
                                ],
                                "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                "value": "1577"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "children": [
                                                    {
                                                        "children": [

                                                        ],
                                                        "name": "com.imohoo.shanpao.ui.home.HomeActivity",
                                                        "value": "76"
                                                    }
                                                ],
                                                "name": "com.imohoo.shanpao.ui.first.LoginingActivity",
                                                "value": "99"
                                            }
                                        ],
                                        "name": "com.cmcc.migusso.sdk.activity.LoginActivity",
                                        "value": "150"
                                    }
                                ],
                                "name": "com.imohoo.shanpao.ui.first.UnLoginActivity",
                                "value": "158"
                            }
                        ],
                        "name": "com.imohoo.shanpao.ui.first.StartupActivity",
                        "value": "2579"
                    }
                ],
                "name": "StartPoint",
                "value": "0"
            },
            "count": [
                "2799",
                "2140",
                "1743",
                "1328",
                "1008"
            ]
        };
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

