// const DEFAULT_SERVER_ORIGIN = "http://starx.cc:8000";
const DEFAULT_SERVER_ORIGIN = "";
const WEATHER_API_URL = "https://uapis.cn/api/v1/misc/weather";
const WEATHER_API_TOKEN = "uapi-vq_e4ztai9A6zCs0g0rBeMgnbjdCI1eawDFfdusO";
const EXTERNAL_PAY_BASE_URL = "https://starx.cc/";
const EXTERNAL_PAY_API_KEY = "PaymentExternalApiKey";
const EXTERNAL_PAY_CLIENT_ID = "dingban-Web";
const EXTERNAL_PAY_ALIPAY_WAY = "zfb";
const EXTERNAL_PAY_WECHAT_WAY = "wx";
const APP_FORWARDING_STORAGE_KEY = "appForwardingSettings";
const CURRENT_PAYMENT_STORAGE_KEY = "currentPayment";
const UI_LANGUAGE_STORAGE_KEY = "portalUiLanguage";
const WEATHER_TODO_TITLE = "天气预报";
const MOBILE_NAV_MEDIA_QUERY = "(max-width: 1200px)";
const SUPPORTED_UI_LANGUAGES = Object.freeze({
    zh: "zh-CN",
    en: "en-US"
});
const TRANSLATABLE_ATTRIBUTES = Object.freeze(["placeholder", "aria-label", "title", "alt", "data-placeholder"]);
const TRANSLATABLE_VALUE_IDS = new Set(["forwardTitle", "forwardDescription", "communityAdminTestTitle", "communityAdminTestMessage"]);
const EN_TEXT_MAP = Object.freeze({
    "待办提醒门户": "Todo Reminder Portal",
    "叮办": "DingBan",
    "叮办 标识": "DingBan Logo",
    "登录": "Login",
    "注册": "Register",
    "邮箱或用户名": "Email or Username",
    "输入邮箱或用户名": "Enter email or username",
    "密码": "Password",
    "邮箱": "Email",
    "用于接收注册验证码": "Used to receive the registration verification code",
    "注册后可直接使用邮箱登录。": "You can log in directly with your email after registration.",
    "验证码": "Verification Code",
    "6 位验证码": "6-digit code",
    "获取验证码": "Get Code",
    "用户名（选填）": "Username (Optional)",
    "不填将根据邮箱自动生成": "Will be generated from your email if left blank",
    "邀请码（选填）": "Invite Code (Optional)",
    "选填，输入 6 位好友邀请码": "Optional. Enter a 6-digit invite code from a friend",
    "Wed端": "Web",
    "关闭导航菜单": "Close Navigation Menu",
    "主导航": "Main Navigation",
    "待办事项": "Todos",
    "待办": "todo",
    "便签笔记": "Sticky Notes",
    "便签": "note",
    "番茄钟": "Pomodoro",
    "我的组": "My Groups",
    "小组": "group",
    "社区交流": "Community",
    "个人中心": "Profile",
    "兑换中心": "Redemption Center",
    "订阅套餐": "Subscription Plans",
    "天气预报": "Weather Forecast",
    "未连接": "Disconnected",
    "未登录": "Not Logged In",
    "未登录用户": "Guest",
    "退出登录": "Log Out",
    "打开导航菜单": "Open Navigation Menu",
    "Web端": "Web",
    "任务、提醒与月度总览": "Tasks, reminders, and monthly overview",
    "普通用户": "Standard User",
    "管理员": "Admin",
    "未订阅": "Not Subscribed",
    "Pro 会员": "Pro Member",
    "任务列表与月度总览视图。": "Task list and monthly overview.",
    "新增待办": "New Todo",
    "天气提醒": "Weather Alert",
    "刷新": "Refresh",
    "任务列表": "Task List",
    "月度总览": "Monthly Overview",
    "全部": "All",
    "个人": "Personal",
    "团队": "Team",
    "搜索待办标题或描述": "Search todo title or description",
    "全部状态": "All Statuses",
    "待完成": "Pending",
    "已完成": "Completed",
    "全部优先级": "All Priorities",
    "高优先级": "High Priority",
    "中优先级": "Medium Priority",
    "低优先级": "Low Priority",
    "全部小组": "All Groups",
    "总任务": "Total Tasks",
    "上一页": "Previous",
    "下一页": "Next",
    "按月查看每天的任务量、完成情况和提醒分布。": "View task volume, completion, and reminder distribution by month.",
    "当日详情": "Day Details",
    "请选择日期": "Select a date",
    "团队快捷筛选": "Team Quick Filter",
    "快速切换到指定小组的任务视图。": "Quickly switch to the task view for a specific group.",
    "一": "Mon",
    "二": "Tue",
    "三": "Wed",
    "四": "Thu",
    "五": "Fri",
    "六": "Sat",
    "日": "Sun",
    "便签列表与日历视图。": "Note list and calendar view.",
    "新建便签": "New Note",
    "便签列表": "Notes List",
    "日历视图": "Calendar View",
    "搜索便签标题或内容": "Search note title or content",
    "清除日期筛选": "Clear Date Filter",
    "便签日历": "Notes Calendar",
    "按月查看每天的便签数量，并快速切换到当天摘要。": "View note counts by day and quickly switch to the daily summary.",
    "当天摘要": "Daily Summary",
    "按日期查看": "Browse by Date",
    "支持专注、短休息、长休息三种阶段切换，并记录今日专注时长。": "Supports focus, short break, and long break phases, and tracks focused time for today.",
    "专注中": "Focusing",
    "准备开始本轮专注": "Ready to start this focus session",
    "计时进行中": "Timer running",
    "专注主题": "Focus Topic",
    "例如：整理月报 / 编写接口文档": "For example: Finish monthly report / Write API docs",
    "专注分钟": "Focus Minutes",
    "短休息分钟": "Short Break Minutes",
    "长休息分钟": "Long Break Minutes",
    "开始": "Start",
    "暂停": "Pause",
    "重置": "Reset",
    "跳过阶段": "Skip Phase",
    "专注统计": "Focus Stats",
    "本地统计，不依赖后端服务。": "Local stats only. No backend service required.",
    "完成轮次": "Completed Sessions",
    "今日专注": "Focused Today",
    "当前主题": "Current Topic",
    "未设置": "Not Set",
    "使用建议": "Usage Tips",
    "可以先在待办列表中筛出当日重点任务，再进入番茄钟进行分段专注，提升执行节奏。": "Filter today's priority tasks in the todo list first, then enter Pomodoro for focused work in stages.",
    "短休息": "Short Break",
    "长休息": "Long Break",
    "创建、加入、退出、删除小组，并查看成员、组长权限与共享待办协作状态。": "Create, join, leave, and delete groups, then view members, owner permissions, and shared todo collaboration.",
    "创建小组": "Create Group",
    "团队协作": "Team Collaboration",
    "共享待办、成员管理和角色权限集中处理": "Handle shared todos, member management, and role permissions in one place",
    "创建或加入小组后，可以直接查看成员、切换团队待办，并在右侧详情面板继续管理。": "After creating or joining a group, you can view members, switch team todos, and continue managing from the detail panel on the right.",
    "输入组 ID 后加入已有小组": "Enter a group ID to join an existing group",
    "加入小组": "Join Group",
    "小组详情": "Group Details",
    "请选择左侧小组查看成员、角色和快捷操作": "Select a group on the left to view members, roles, and quick actions",
    "社区运营": "Community Ops",
    "覆盖首页帖子流、发布帖子、帖子管理、用户管理、分类管理和管理员看板。": "Covers the home feed, publishing, post management, user management, category management, and the admin board.",
    "帖子、用户、分类与管理员看板统一维护": "Manage posts, users, categories, and the admin board in one place",
    "帖子流、发布帖子、帖子管理、用户管理和分类管理都保持在同一工作区，方便快速联动处理。": "Feed, publishing, post management, user management, and category management stay in the same workspace for faster coordination.",
    "社区热度": "Community Activity",
    "帖子流": "Feed",
    "发布帖子": "Publish Post",
    "帖子管理": "Post Management",
    "用户管理": "User Management",
    "分类管理": "Category Management",
    "帖子分类": "Post Category",
    "帖子标题": "Post Title",
    "上传图片": "Upload Image",
    "输入帖子正文，支持基础富文本和图片内容": "Enter post content. Basic rich text and image content are supported.",
    "保存后立即公开": "Publish immediately after saving",
    "设为置顶（仅管理员）": "Pin post (admins only)",
    "保存帖子": "Save Post",
    "重置表单": "Reset Form",
    "管理员可筛选全部帖子并查看发布状态、置顶状态和作者信息；普通用户仅看到自己可管理的帖子。": "Admins can filter all posts and view publication status, pin status, and author information. Standard users only see posts they can manage.",
    "搜索标题、摘要、作者或正文关键词": "Search title, summary, author, or content",
    "全部帖子": "All Posts",
    "已发布": "Published",
    "草稿": "Draft",
    "置顶": "Pinned",
    "仅看我的": "Mine Only",
    "用户管理仅对社区管理员开放，可筛选管理员、Pro 用户、停用用户，并从这里进入后台看板。": "User management is available only to community admins. You can filter admins, Pro users, and disabled users, and open the admin board here.",
    "搜索用户名、昵称或邮箱": "Search username, nickname, or email",
    "全部用户": "All Users",
    "仅管理员": "Admins Only",
    "仅 Pro": "Pro Only",
    "仅停用": "Disabled Only",
    "分类名称": "Category Name",
    "分类标识": "Category Slug",
    "强调色": "Accent Color",
    "排序": "Sort Order",
    "启用分类": "Enable Category",
    "保存分类": "Save Category",
    "重置分类": "Reset Category",
    "基础资料": "Basic Info",
    "偏好设置": "Preferences",
    "渠道设置": "Channel Settings",
    "用户名": "Username",
    "显示名称": "Display Name",
    "头像地址": "Avatar URL",
    "保存资料": "Save Profile",
    "邀请码与兑换点": "Invite Code and Points",
    "分享邀请码邀请好友注册，获得兑换点后可在兑换中心兑换 Pro 时长。": "Invite friends with your code and redeem the points for Pro time in the redemption center.",
    "复制邀请码": "Copy Invite Code",
    "打开兑换中心": "Open Redemption Center",
    "我的邀请码": "My Invite Code",
    "当前兑换点": "Current Points",
    "1. 分享邀请码：将你的邀请码或链接分享给好友。": "1. Share your invite code or link with friends.",
    "2. 好友注册：好友使用你的邀请码注册成功，你将获得 1 天兑换点。": "2. Friend signs up: when a friend registers with your invite code, you earn 1 day of points.",
    "3. 首次购买奖励：好友首次购买时，你将获得对应天数 15% 的兑换点奖励。": "3. First purchase reward: when a friend makes the first purchase, you earn points equal to 15% of the purchased days.",
    "默认提醒间隔（分钟）": "Default Reminder Interval (min)",
    "主题": "Theme",
    "语言": "Language",
    "简体中文": "Simplified Chinese",
    "微信 Webhook": "WeChat Webhook",
    "启用邮件通知": "Enable Email Notifications",
    "启用推送通知": "Enable Push Notifications",
    "通知声音": "Notification Sound",
    "浅色模式": "Light Mode",
    "保存设置": "Save Settings",
    "应用转发预设": "App Forwarding Preset",
    "对应移动端 `AppForwardingSettingsStore`。浏览器端会保存配置草稿，供 Android 侧读取并执行应用通知转发。": "Maps to the mobile-side `AppForwardingSettingsStore`. The browser saves a draft configuration for Android to read and execute app notification forwarding.",
    "未启用": "Disabled",
    "启用应用转发": "Enable App Forwarding",
    "自动消除通知": "Auto-dismiss Notifications",
    "仅锁屏时转发": "Only When Locked",
    "仅转发短信广播": "SMS Broadcast Only",
    "仅转发指定应用": "Selected Apps Only",
    "指定应用列表": "Selected Apps",
    "只有在开启“仅转发指定应用”时生效，可以同时保存应用名称和包名。": "Only works when \"Selected Apps Only\" is enabled. You can save both app names and package names.",
    "清空列表": "Clear List",
    "应用名称": "App Name",
    "包名": "Package Name",
    "例如：微信、企业微信、支付宝": "For example: WeChat, WeCom, Alipay",
    "例如：com.tencent.mm": "For example: com.tencent.mm",
    "添加应用": "Add App",
    "测试标题": "Test Title",
    "渠道测试消息": "Channel Test Message",
    "来源类型": "Source Type",
    "应用": "App",
    "短信": "SMS",
    "测试内容": "Test Content",
    "这是一条来自网页端的渠道测试消息。": "This is a channel test message from the web client.",
    "发送渠道测试": "Send Channel Test",
    "分享邀请码获取兑换点，兑换 Pro 时长，或使用兑换码为兑换点充值。": "Share invite codes to earn points, redeem Pro time, or recharge points with redemption codes.",
    "邀请码为 6 位数字，复制后可直接发给好友注册。": "The invite code is 6 digits long and can be copied directly for friends to register.",
    "兑换 Pro 权限": "Redeem Pro",
    "Pro 权限": "Pro Access",
    "兑换点与天数 1:1 抵扣，可直接兑换 1 天、7 天或 30 天的 Pro 权限。": "Points redeem Pro time at a 1:1 ratio. You can directly redeem 1, 7, or 30 days of Pro.",
    "兑换码充值": "Redeem Code Top-up",
    "兑换额度": "Redeem Credits",
    "最近生成的卡密": "Recently Generated Codes",
    "新生成的兑换码会展示在这里，方便立即分发或复制。": "Newly generated codes will appear here for quick distribution or copying.",
    "奖励说明": "Reward Rules",
    "邀请好友注册与购买都能获得兑换点，可直接在本页兑换 Pro 权限。": "Inviting friends to register or purchase earns points that can be redeemed for Pro directly on this page.",
    "3. 获得奖励：好友首次购买时，你将获得 15% 的对应天数兑换点奖励。": "3. Earn rewards: when a friend makes the first purchase, you receive points equal to 15% of the purchased days.",
    "管理员卡密生成": "Admin Code Generator",
    "可以生成不同天数、不同渠道标签的兑换码，并筛选已使用或未使用卡密。": "Generate redemption codes with different day amounts and tags, then filter used or unused codes.",
    "生成数量": "Quantity",
    "兑换天数": "Redeem Days",
    "标签": "Tag",
    "如：公众号 / 渠道A": "For example: Public Account / Channel A",
    "描述": "Description",
    "方便后续筛选的描述": "Description for later filtering",
    "生成兑换码": "Generate Codes",
    "未使用": "Unused",
    "已使用": "Used",
    "批量删除": "Batch Delete",
    "筛选标签": "Filter Tag",
    "全部标签": "All Tags",
    "搜索兑换码 / 描述": "Search code / description",
    "支持模糊搜索，标签请使用左侧下拉框": "Supports fuzzy search. Use the dropdown on the left for tags.",
    "筛选列表": "Filter List",
    "展示当前会员状态，并支持创建外部支付订单、扫码支付和手动同步会员时长。": "Shows your current membership status and supports external payment orders, QR payment, and manual membership sync.",
    "支付方式": "Payment Method",
    "支付宝": "Alipay",
    "微信支付": "WeChat Pay",
    "下单说明": "Purchase Notes",
    "网页端会直接尝试创建外部支付订单；如果当前环境无法调起支付，也可以使用右侧的订单同步流程完成补录。": "The web client will try to create an external payment order directly. If payment cannot be launched in the current environment, use the sync flow on the right to complete it manually.",
    "月度会员": "Monthly Membership",
    "年度会员": "Annual Membership",
    "适合短期高频使用，快速开启高级提醒、社区和转发能力。": "Best for short-term, frequent use to quickly unlock advanced reminders, community, and forwarding features.",
    "适合长期使用，按年度统一管理订阅、社区权限和通知渠道。": "Best for long-term use with yearly management of subscriptions, community access, and notification channels.",
    "立即开通": "Start Now",
    "会员同步": "Membership Sync",
    "后端提供 `api/User/pro-membership/sync`，可通过订单号手动同步会员时长。": "The backend provides `api/User/pro-membership/sync`, which lets you sync membership time manually by order ID.",
    "支付二维码": "Payment QR Code",
    "可以直接扫码支付；支付完成后可先刷新状态，若尚未回写，再使用下方表单手动同步。": "You can pay by scanning directly. After payment, refresh the status first; if it still has not synced back, use the form below to sync manually.",
    "刷新支付状态": "Refresh Payment Status",
    "打开支付链接": "Open Payment Link",
    "带入同步表单": "Fill Sync Form",
    "订单号": "Order ID",
    "增加月份": "Add Months",
    "同步会员": "Sync Membership",
    "直接调用项目已经使用的天气接口，并支持一键转成天气提醒待办。": "Uses the weather API already connected to the project and can turn results into weather reminder todos with one click.",
    "查询天气": "Check Weather",
    "转为天气提醒": "Create Weather Reminder",
    "城市": "City",
    "例如：成都 / 北京 / Tokyo": "For example: Chengdu / Beijing / Tokyo",
    "行政区编码": "District Code",
    "已知 adcode 时优先使用": "Prefer this when the adcode is known",
    "扩展字段": "Extended Fields",
    "多天预报": "Multi-day Forecast",
    "逐小时预报": "Hourly Forecast",
    "分钟级降水": "Minutely Precipitation",
    "生活指数": "Life Indices",
    "尚未查询天气": "Weather not queried yet",
    "请输入城市或行政区编码后开始查询": "Enter a city or district code to start",
    "未来天气": "Upcoming Weather",
    "按天查看预报趋势": "View forecast trends by day",
    "小时 / 降水 / 指数": "Hourly / Rain / Indices",
    "展示逐小时、分钟级降水和生活指数细节": "Shows hourly, minutely precipitation, and life index details",
    "标题": "Title",
    "提醒时间": "Reminder Time",
    "所属小组": "Group",
    "循环提醒": "Repeat Reminder",
    "循环模式": "Repeat Mode",
    "每天": "Daily",
    "每周": "Weekly",
    "每月": "Monthly",
    "每月日期": "Day of Month",
    "每周重复日": "Repeat Weekdays",
    "随机提醒": "Random Reminder",
    "下雨时提醒": "Alert When It Rains",
    "天气位置": "Weather Location",
    "降雨检查间隔（分钟）": "Rain Check Interval (min)",
    "完成": "Complete",
    "取消": "Cancel",
    "保存": "Save",
    "提醒时间到了": "Time for Your Reminder",
    "提醒": "Reminder",
    "稍后提醒": "Snooze",
    "输入便签内容，支持基础富文本与图片": "Enter note content. Basic rich text and images are supported.",
    "小组成员": "Group Members",
    "渠道类型": "Channel Type",
    "启用渠道": "Enable Channel",
    "保存渠道": "Save Channel",
    "帖子详情": "Post Details",
    "社区发帖": "Community Posting",
    "Pro用户专享发帖特权": "Pro-exclusive Posting Privilege",
    "Pro用户专享发帖特权。升级为 Pro 后即可在社区发布帖子、分享经验与进展。当前仍可继续浏览帖子流和互动内容。": "Pro-exclusive posting privilege. Upgrade to Pro to publish posts, share experience, and post progress in the community. You can still browse the feed and interact right now.",
    "查看 Pro 套餐": "View Pro Plans",
    "稍后再说": "Later",
    "用户": "User",
    "身份": "Role",
    "订阅": "Subscription",
    "到期时间": "Expires",
    "正常": "Active",
    "已停用": "Disabled",
    "支付成功": "Paid",
    "订单已关闭": "Order Closed",
    "待支付": "Awaiting Payment",
    "在线连接": "Online Connections",
    "调度任务": "Scheduled Jobs",
    "活跃任务": "Active Jobs",
    "测试入口": "Test Entry",
    "已启用": "Enabled",
    "成员": "Member",
    "组长": "Owner",
    "今天": "Today",
    "暂无记录": "No records",
    "未知": "Unknown",
    "未绑定邮箱": "No Email Bound",
    "未命名用户": "Unnamed User",
    "匿名用户": "Anonymous User",
    "我的评论": "My Comment",
    "帖子": "post",
    "评论": "comment",
    "点赞": "like",
    "收藏": "favorite",
    "后台看板": "admin board",
    "任务": "task",
    "计划任务": "scheduled tasks",
    "兑换码": "redemption code",
    "兑换码列表": "redemption code list",
    "兑换码标签": "redemption code tags",
    "个人资料": "profile",
    "设置": "settings",
    "渠道": "channel",
    "天气信息": "weather information",
    "天气数据": "weather data",
    "天气明细": "weather details",
    "未来天气数据": "future weather data",
    "逐小时天气数据": "hourly weather data",
    "分钟级降水数据": "minutely precipitation data",
    "生活指数数据": "life index data",
    "目标用户 ID": "target user ID",
    "应用包名": "app package name",
    "评论内容": "comment content",
    "会员状态": "membership status",
    "会员时长": "membership duration",
    "额度信息": "quota information",
    "成员信息": "member information",
    "小组详情": "group details",
    "验证码已发送，请查收邮箱": "Verification code sent. Check your email.",
    "登录成功": "Login successful",
    "登录失败": "Login failed",
    "请先输入邮箱": "Please enter an email first",
    "邀请码必须是 6 位数字": "Invite code must be 6 digits",
    "注册成功，请登录": "Registration successful. Please log in.",
    "注册失败": "Registration failed",
    "已退出登录": "Logged out",
    "本轮专注已完成": "This focus session is complete",
    "休息结束，开始下一轮专注": "Break over. Start the next focus round.",
    "当前没有可用的 Pro 兑换方案": "No Pro redemption options are currently available",
    "当前筛选条件下没有匹配的兑换码": "No redemption codes match the current filters",
    "当前筛选条件下没有可删除的兑换码": "No redemption codes can be deleted under the current filters",
    "当前还没有可复制的邀请码": "There is no invite code to copy yet",
    "仅支持兑换 1 天、7 天或 30 天 Pro 权限": "Only 1-day, 7-day, or 30-day Pro redemption is supported",
    "兑换码充值成功": "Redemption code top-up successful",
    "仅管理员可生成兑换码": "Only admins can generate redemption codes",
    "生成数量必须是 1 到 500 之间的整数": "Quantity must be an integer between 1 and 500",
    "请选择有效的兑换天数": "Please choose a valid redemption day count",
    "兑换码 ID 无效": "Invalid redemption code ID",
    "请先启用应用转发，并切换为仅转发指定应用": "Enable app forwarding first and switch to selected apps only",
    "个人资料已保存": "Profile saved",
    "偏好设置已保存": "Preferences saved",
    "渠道设置已保存": "Channel settings saved",
    "测试消息已发送": "Test message sent",
    "会员状态已同步更新": "Membership status synced",
    "未找到对应的订阅套餐": "Matching subscription plan not found",
    "请先登录，再创建支付订单": "Please log in before creating a payment order",
    "支付订单已创建，请继续完成支付": "Payment order created. Please complete payment.",
    "当前没有可刷新的支付订单": "There is no payment order to refresh",
    "支付已完成，会员状态已刷新": "Payment completed and membership status refreshed",
    "当前订单已关闭，请重新下单": "The current order is closed. Please place a new order.",
    "订单仍在等待支付": "The order is still awaiting payment",
    "当前订单没有可打开的支付链接": "The current order has no payment link to open",
    "当前没有可带入的支付订单": "There is no payment order to fill into the sync form",
    "已将订单号带入会员同步表单": "Order ID inserted into the membership sync form",
    "已获取最新天气信息": "Latest weather information loaded",
    "初始化失败，请重新登录": "Initialization failed. Please log in again.",
    "预报": "Forecast",
    "小时": "Hourly",
    "分钟": "Minutely",
    "指数": "Indices",
    "省份": "Province",
    "区县": "District",
    "天气": "Weather",
    "天气图标": "Weather Icon",
    "温度": "Temperature",
    "风向": "Wind Direction",
    "风力": "Wind Force",
    "湿度": "Humidity",
    "更新时间": "Updated",
    "体感温度": "Feels Like",
    "能见度": "Visibility",
    "气压": "Pressure",
    "紫外线指数": "UV Index",
    "空气质量": "Air Quality",
    "日出": "Sunrise",
    "日落": "Sunset",
    "最高温度": "High Temperature",
    "最低温度": "Low Temperature",
    "风速": "Wind Speed",
    "降水量": "Precipitation",
    "白天天气": "Daytime Weather",
    "夜间天气": "Night Weather",
    "白天图标": "Day Icon",
    "夜间图标": "Night Icon",
    "星期": "Weekday",
    "日期": "Date",
    "时间": "Time",
    "摘要": "Summary",
    "类型": "Type",
    "名称": "Name",
    "等级": "Level",
    "说明": "Description",
    "详情": "Details",
    "概率": "Probability",
    "降水概率": "Precipitation Probability",
    "正在查询天气...": "Checking weather...",
    "天气查询失败": "Weather query failed",
    "已获取最新天气信息。": "Latest weather information loaded.",
    "城市和行政区编码都为空时，将按客户端 IP 自动定位。": "If both city and district code are empty, the client IP will be used for auto-location.",
    "暂无天气明细": "No weather details yet",
    "暂无未来天气数据": "No future weather data",
    "暂无逐小时天气数据": "No hourly weather data",
    "暂无分钟级降水数据": "No minutely precipitation data",
    "暂无生活指数数据": "No life index data",
    "钉钉群机器人": "DingTalk Group Bot",
    "钉钉企业机器人": "DingTalk Enterprise Bot",
    "企业微信机器人": "WeCom Group Bot",
    "企业微信应用消息": "WeCom App Message",
    "飞书群机器人": "Feishu Group Bot",
    "飞书企业应用": "Feishu App",
    "Socket 通道": "Socket Channel",
    "Discord 机器人": "Discord Bot",
    "向钉钉群机器人发送提醒消息。": "Send reminder messages to a DingTalk group bot.",
    "通过钉钉企业机器人发送内部提醒消息。": "Send internal reminder messages through a DingTalk enterprise bot.",
    "向企业微信群机器人发送提醒消息。": "Send reminder messages to a WeCom group bot.",
    "通过企业微信应用推送提醒消息。": "Push reminder messages through a WeCom app.",
    "向飞书群机器人发送提醒消息。": "Send reminder messages to a Feishu group bot.",
    "通过飞书企业应用推送提醒消息。": "Push reminder messages through a Feishu app.",
    "向 Gotify 服务端发送提醒消息。": "Send reminder messages to a Gotify server.",
    "使用服务端 SMTP 配置发送提醒邮件。": "Send reminder emails using server-side SMTP settings.",
    "通过 Bark 向 iPhone 发送提醒通知。": "Send reminder notifications to iPhone via Bark.",
    "通过 TCP、UDP 或 MQTT 发送提醒消息。": "Send reminder messages via TCP, UDP, or MQTT.",
    "将提醒负载发送到任意 HTTP 接口。": "Send reminder payloads to any HTTP endpoint.",
    "通过 Telegram Bot 发送提醒消息。": "Send reminder messages via Telegram Bot.",
    "通过 Server酱 推送提醒消息。": "Push reminder messages via ServerChan.",
    "通过 PushPlus 推送提醒消息。": "Push reminder messages via PushPlus.",
    "通过 Qmsg 向 QQ 用户或 QQ 群发送提醒消息。": "Send reminder messages to QQ users or groups via Qmsg.",
    "通过 Discord Webhook 发送提醒消息。": "Send reminder messages via Discord Webhook.",
    "在 Android 设备本地发送提醒短信。": "Send reminder SMS locally on Android devices.",
    "Webhook 地址": "Webhook URL",
    "签名密钥": "Signing Secret",
    "用户 ID 列表": "User ID List",
    "消息类型": "Message Type",
    "文本": "Text",
    "@所有人": "@Everyone",
    "企业 ID": "Corp ID",
    "应用 AgentId": "App AgentId",
    "应用 Secret": "App Secret",
    "接收用户": "Recipients",
    "接收部门": "Recipient Departments",
    "接收标签": "Recipient Tags",
    "自定义接口地址": "Custom API Base URL",
    "可选，默认使用 https://qyapi.weixin.qq.com。": "Optional. Defaults to https://qyapi.weixin.qq.com.",
    "接收对象 ID": "Recipient ID",
    "接收对象类型": "Recipient ID Type",
    "用户 ID": "User ID",
    "群聊 ID": "Chat ID",
    "消息接口地址": "Message API URL",
    "优先级": "Priority",
    "默认值为 5。": "Default is 5.",
    "收件邮箱": "Recipient Email",
    "仅用于通知投递。": "Used only for notification delivery.",
    "Bark 服务地址": "Bark Server URL",
    "分组": "Group",
    "提示音": "Sound",
    "推送级别": "Push Level",
    "主动提醒": "Active",
    "时效提醒": "Time Sensitive",
    "被动提醒": "Passive",
    "启用": "Enabled",
    "停用": "Disabled",
    "协议": "Protocol",
    "地址": "Address",
    "端口": "Port",
    "消息模板": "Message Template",
    "留空时将发送默认提醒内容。": "If left blank, the default reminder content will be sent.",
    "成功响应关键字": "Success Response Keyword",
    "可选，设置后返回内容必须包含该文本。": "Optional. If set, the response content must include this text.",
    "输入编码": "Input Charset",
    "输出编码": "Output Charset",
    "MQTT 接收主题": "MQTT Receive Topic",
    "MQTT 发送主题": "MQTT Send Topic",
    "MQTT 协议类型": "MQTT Scheme",
    "MQTT 路径": "MQTT Path",
    "客户端 ID": "Client ID",
    "保留消息": "Retained Message",
    "请求地址": "Request URL",
    "请求方法": "HTTP Method",
    "请求头 JSON": "Headers JSON",
    "例如：{\"Authorization\":\"Bearer xxx\"}": "Example: {\"Authorization\":\"Bearer xxx\"}",
    "请求体模板": "Request Body Template",
    "支持 {{title}}、{{description}}、{{group}}、{{remind_time}}、{{message}} 等占位符。": "Supports placeholders such as {{title}}, {{description}}, {{group}}, {{remind_time}}, and {{message}}.",
    "Bot Token 或接口地址": "Bot Token or API URL",
    "聊天 ID": "Chat ID",
    "话题 ID": "Thread ID",
    "解析模式": "Parse Mode",
    "纯文本": "Plain Text",
    "站点": "Site",
    "模板": "Template",
    "默认": "Default",
    "密钥": "Secret Key",
    "QQ 号 / 群号": "QQ ID / Group ID",
    "发送目标": "Target",
    "QQ群": "QQ Group",
    "可选，支持常见提醒占位符。": "Optional. Supports common reminder placeholders.",
    "内容模板": "Content Template",
    "手机号列表": "Phone Number List",
    "多个号码请使用逗号分隔。": "Use commas to separate multiple numbers.",
    "发送使用的 SIM 卡": "SIM Slot",
    "仅无网络时发送": "Only When Offline",
    "设备无网络时由 Android 短信转发使用。": "Used by Android SMS forwarding when the device is offline.",
    "通知渠道": "Notification Channels",
    "选择一个渠道开始配置": "Choose a channel to start configuration",
    "配置提醒消息投递方式。": "Configure how reminder messages are delivered.",
    "自定义通知渠道。": "Custom notification channel.",
    "自定义通知渠道配置。": "Custom notification channel configuration.",
    "这个渠道依赖移动端或桌面客户端能力。": "This channel depends on mobile or desktop client capabilities.",
    "这些字段已经和当前通知渠道目录保持对齐。": "These fields are aligned with the current notification channel catalog.",
    "保存后启用": "Enabled after save",
    "保存后停用": "Disabled after save",
    "仅客户端执行": "Client-side Only",
    "服务端可直接投递": "Server Deliverable",
    "附加字段": "Additional Fields",
    "保留未识别或未来扩展的渠道字段，避免保存时丢失。": "Preserve unrecognized or future extension fields so they are not lost on save.",
    "新增字段": "Add Field",
    "字段键": "Field Key",
    "字段值": "Field Value",
    "操作": "Actions",
    "删除": "Delete",
    "编辑": "Edit",
    "复制": "Copy",
    "编辑帖子": "Edit Post",
    "删除帖子": "Delete Post",
    "评论区": "Comments",
    "新增评论": "New Comment",
    "提交评论": "Submit Comment",
    "编辑便签": "Edit Note",
    "编辑小组": "Edit Group",
    "编辑天气提醒": "Edit Weather Reminder",
    "新增天气提醒": "New Weather Reminder",
    "编辑渠道": "Edit Channel",
    "新增渠道": "Add Channel",
    "发送中...": "Sending...",
    "任务到点": "task due",
    "暂时无法获取小组详情": "Group details are temporarily unavailable",
    "请选择或创建小组": "Select or create a group",
    "请选择小组": "Select a group",
    "当前小组还没有成员信息": "This group has no member information yet",
    "选择左侧日历中的日期后，这里会显示当天的便签摘要。": "After selecting a date in the calendar on the left, the note summary for that day will appear here.",
    "当天没有便签记录": "There are no notes for that day",
    "当前账号没有用户管理权限": "This account does not have user management permission",
    "当前账号没有分类管理权限": "This account does not have category management permission",
    "暂无已选择的应用": "No selected apps yet",
    "暂无附加字段": "No additional fields yet",
    "暂无待支付或待同步的会员订单": "No pending payment or membership sync orders",
    "循环": "Repeating",
    "总数": "Total",
    "创建": "Created",
    "更新": "Updated",
    "创建者": "Created By",
    "关键词": "Keyword",
    "含逾期": "Overdue",
    "无逾期": "No Overdue",
    "编辑待办": "Edit Todo",
    "请输入天气提醒位置": "Please enter a weather reminder location",
    "当天暂无任务": "No tasks for that day",
    "分类": "Category",
    "未命名便签": "Untitled Note",
    "未命名小组": "Untitled Group",
    "未命名分类": "Untitled Category",
    "暂无分类": "No categories",
    "暂无说明": "No description",
    "成员待加载": "Members loading",
    "当前查看": "Viewing",
    "查看待办": "View Todos",
    "查看全部成员": "View All Members",
    "切换到该组待办": "Switch to Group Todos",
    "小组 ID": "Group ID",
    "我的角色": "My Role",
    "成员数量": "Member Count",
    "协作范围": "Collaboration Scope",
    "共享待办": "Shared Todos",
    "成员预览": "Member Preview",
    "组长可直接移除成员，普通成员仅可查看。": "Owners can remove members directly. Members can only view.",
    "已加入小组": "Joined group",
    "已退出小组": "Left group",
    "暂无成员": "No members",
    "成员已移除": "Member removed",
    "未命名成员": "Unnamed Member",
    "个人待办": "Personal Todos",
    "社区": "Community",
    "社区名称": "Community Name",
    "管理权限": "Management Access",
    "已开启": "Enabled",
    "未开启": "Disabled",
    "个人信息": "Personal Info",
    "我的统计": "My Stats",
    "发帖数": "Post Count",
    "评论数": "Comment Count",
    "点赞数": "Like Count",
    "收藏数": "Favorite Count",
    "我点赞的": "Liked by Me",
    "我收藏的": "Favorited by Me",
    "我评论的": "Commented by Me",
    "暂无帖子": "No posts",
    "未命名帖子": "Untitled Post",
    "未分类": "Uncategorized",
    "未知作者": "Unknown Author",
    "暂无摘要": "No summary",
    "没有符合条件的用户": "No matching users",
    "取消管理员": "Remove Admin",
    "设为管理员": "Make Admin",
    "取消 Pro": "Remove Pro",
    "授予 Pro": "Grant Pro",
    "启用账号": "Enable Account",
    "停用账号": "Disable Account",
    "创建时间未知": "Created time unknown",
    "社区后台管理": "Community Admin",
    "集中查看在线连接、调度任务和测试提醒发送状态。": "View online connections, scheduled jobs, and test reminder delivery in one place.",
    "刷新看板": "Refresh Board",
    "清空任务": "Clear Jobs",
    "用于确认当前有哪些用户仍保持实时连接。": "Shows which users currently keep a real-time connection.",
    "在线": "Online",
    "支持按任务键删除单个任务，或清空全部计划任务。": "Delete a single job by key, or clear all scheduled jobs.",
    "未设置下一次执行": "Next run not set",
    "社区后台测试提醒": "Community Admin Test Reminder",
    "这是一条来自网页端社区后台的测试提醒，用于验证消息链路。": "This is a test reminder from the web community admin panel to verify the delivery pipeline.",
    "这是一条来自社区后台的测试提醒。": "This is a test reminder from the community admin panel.",
    "提醒标题": "Reminder Title",
    "提醒内容": "Reminder Message",
    "输入需要接收测试提醒的用户 ID": "Enter the user ID that should receive the test reminder",
    "发送测试提醒": "Send Test Reminder",
    "测试提醒已发送": "Test reminder sent",
    "确认删除": "Confirm Delete",
    "刚刚": "Just now",
    "确认删除这条评论后将无法恢复。": "Deleting this comment cannot be undone.",
    "未发布": "Unpublished",
    "评论已提交": "Comment submitted",
    "评论内容不能为空": "Comment content cannot be empty",
    "评论已更新": "Comment updated",
    "评论已删除": "Comment deleted",
    "编辑渠道": "Edit Channel",
    "新增渠道": "Add Channel",
    "已配置": "Configured",
    "未配置": "Not Configured",
    "仅客户端": "Client Only",
    "需要应用转发能力支持。": "Requires app forwarding support.",
    "转发全部应用通知": "Forward All App Notifications",
    "兑换码已复制": "Redemption code copied",
    "复制兑换码失败，请手动复制": "Failed to copy the redemption code. Please copy it manually.",
    "重连中": "Reconnecting",
    "已连接": "Connected",
    "连接断开": "Disconnected",
    "连接失败": "Connection failed",
    "已延后 10 分钟提醒": "Reminder snoozed for 10 minutes",
    "是": "Yes",
    "否": "No",
    "当前已开通 Pro 会员": "Pro membership is active",
    "当前尚未开通 Pro 会员": "Pro membership is not active",
    "请输入需要同步的订单号": "Please enter the order ID to sync",
    "同步会员状态失败": "Failed to sync membership status",
    "支付订单已创建，请继续完成支付": "Payment order created. Please complete payment.",
    "创建支付订单失败": "Failed to create the payment order",
    "当前没有可刷新的支付订单": "No payment order available to refresh",
    "当前订单已关闭，请重新下单": "The current order is closed. Please place a new order.",
    "当前订单已关闭，请重新下单后再同步会员": "The current order is closed. Please place a new order before syncing membership again.",
    "当前订单尚未支付，不能同步会员": "The current order has not been paid yet, so membership cannot be synced.",
    "订单仍在等待支付": "The order is still awaiting payment",
    "当前订单没有可打开的支付链接": "The current order has no payment link to open",
    "当前没有可带入的支付订单": "No payment order available to fill",
    "已将订单号带入会员同步表单": "Order ID filled into the membership sync form",
    "请使用微信扫一扫完成支付，支付成功后返回这里刷新状态。": "Use WeChat to scan and pay, then return here to refresh the status.",
    "支付宝通常会直接拉起支付链接；支付成功后如果会员状态还没刷新，再使用同步流程。": "Alipay usually opens the payment link directly. If membership has not refreshed after payment, use the sync flow.",
    "网页端会创建微信支付订单，并展示二维码；支付完成后可在当前页面刷新状态。": "The web client creates a WeChat Pay order and shows a QR code. Refresh the status on this page after payment.",
    "网页端会优先创建支付宝支付链接；支付成功后可通过右侧订单同步流程刷新会员时长。": "The web client creates an Alipay payment link first. After payment, use the sync flow on the right to refresh membership time.",
    "已邀请好友": "Invited Friends",
    "已使用兑换码": "Used Codes",
    "Pro 到期时间": "Pro Expiry",
    "暂无描述": "No description",
    "尚未使用": "Not Yet Used",
    "未知用户": "Unknown User",
    "查询失败，请检查网络或授权信息。": "Query failed. Please check your network or authorization settings.",
    "Pro用户": "Pro User",
    "创建新的共享团队": "create a new shared team",
    "加入新的共享团队": "join a new shared team",
    "继续操作": "continue",
    "请输入有效的小组 ID": "Please enter a valid group ID",
    "请输入有效的会员时长": "Please enter a valid membership duration",
    "请输入分类名称": "Please enter a category name",
    "请输入评论内容": "Please enter comment content",
    "评论内容不能为空": "Comment content cannot be empty",
    "请输入应用包名": "Please enter an app package name"
});
const TRANSLATION_SEGMENT_RULES = Object.freeze([
    { source: ": ", target: ": " },
    { source: " · ", target: " · " },
    { source: " / ", target: " / " }
]);
const EN_TEXT_RULES = Object.freeze([
    { pattern: /^第\s*(\d+)\s*\/\s*(\d+)\s*页$/, replace: (match) => `Page ${match[1]} / ${match[2]}` },
    { pattern: /^第\s*(\d+)\s*页$/, replace: (match) => `Page ${match[1]}` },
    { pattern: /^(\d+)s 后重试$/, replace: (match) => `Retry in ${match[1]}s` },
    { pattern: /^(\d+)\s*分钟$/, replace: (match) => `${match[1]} min` },
    { pattern: /^(\d+)\s*日$/, replace: (match) => `${match[1]}` },
    { pattern: /^(\d+)\s*条$/, replace: (match) => `${match[1]} ${Number(match[1]) === 1 ? "note" : "notes"}` },
    { pattern: /^(\d+)\s*个月$/, replace: (match) => `${match[1]} ${Number(match[1]) === 1 ? "month" : "months"}` },
    { pattern: /^(\d+)\s*天$/, replace: (match) => `${match[1]} ${Number(match[1]) === 1 ? "day" : "days"}` },
    { pattern: /^(\d+)\s*天 Pro$/, replace: (match) => `${match[1]}-day Pro` },
    { pattern: /^¥([0-9.]+)\s*\/\s*(\d+)\s*个月$/, replace: (match) => `¥${match[1]} / ${match[2]} ${Number(match[2]) === 1 ? "month" : "months"}` },
    { pattern: /^天气接口返回\s*(\d+)$/, replace: (match) => `Weather API returned ${match[1]}` },
    { pattern: /^已邀请\s*(\d+)\s*人$/, replace: (match) => `${match[1]} invited` },
    { pattern: /^已使用\s*(\d+)\s*个兑换码$/, replace: (match) => `${match[1]} codes used` },
    { pattern: /^已生成\s*(\d+)\s*个兑换码$/, replace: (match) => `${match[1]} redemption codes generated` },
    { pattern: /^已批量删除\s*(\d+)\s*个兑换码$/, replace: (match) => `${match[1]} redemption codes deleted` },
    { pattern: /^兑换\s*(\d+)\s*天$/, replace: (match) => `Redeem ${match[1]} ${Number(match[1]) === 1 ? "day" : "days"}` },
    { pattern: /^(\d+)\s*天额度$/, replace: (match) => `${match[1]}-day credit` },
    { pattern: /^消耗\s*(\d+)\s*点$/, replace: (match) => `Costs ${match[1]} points` },
    { pattern: /^湿度\s*(\d+)%$/, replace: (match) => `Humidity ${match[1]}%` },
    { pattern: /^更新时间：(.+)$/, replace: (match) => `Updated: ${match[1]}` },
    { pattern: /^创建时间：(.+)$/, replace: (match) => `Created: ${match[1]}` },
    { pattern: /^使用信息：(.+)$/, replace: (match, language) => `Usage: ${translateTextCore(match[1], language)}` },
    { pattern: /^订单号：(.+)$/, replace: (match) => `Order ID: ${match[1]}` },
    { pattern: /^外部订单号：(.+)$/, replace: (match) => `External Order ID: ${match[1]}` },
    { pattern: /^当前账号：(.+)$/, replace: (match) => `Account: ${match[1]}` },
    { pattern: /^到期时间：(.+)$/, replace: (match) => `Expires: ${match[1]}` },
    { pattern: /^账号状态：(.+)$/, replace: (match, language) => `Status: ${translateTextCore(match[1], language)}` },
    { pattern: /^当前支付方式：(.+)$/, replace: (match, language) => `Payment Method: ${translateTextCore(match[1], language)}` },
    { pattern: /^支付金额：(.+)，开通时长：(.+)$/, replace: (match, language) => `Amount: ${match[1]}, Duration: ${translateTextCore(match[2], language)}` },
    { pattern: /^(\d+) 个字段$/, replace: (match) => `${match[1]} fields` },
    { pattern: /^(\d+) 个标准字段$/, replace: (match) => `${match[1]} standard fields` },
    { pattern: /^已配置 (\d+) 个$/, replace: (match) => `${match[1]} configured` },
    { pattern: /^(\d+) 个已启用$/, replace: (match) => `${match[1]} enabled` },
    { pattern: /^总数\s*(\d+)$/, replace: (match) => `Total ${match[1]}` },
    { pattern: /^待完成\s*(\d+)$/, replace: (match) => `Pending ${match[1]}` },
    { pattern: /^帖子 (\d+)$/, replace: (match) => `Posts ${match[1]}` },
    { pattern: /^评论 (\d+)$/, replace: (match) => `Comments ${match[1]}` },
    { pattern: /^点赞 (\d+)$/, replace: (match) => `Likes ${match[1]}` },
    { pattern: /^收藏 (\d+)$/, replace: (match) => `Favorites ${match[1]}` },
    { pattern: /^成员 (\d+)$/, replace: (match) => `${match[1]} ${Number(match[1]) === 1 ? "member" : "members"}` },
    { pattern: /^排序 (\d+)$/, replace: (match) => `Order ${match[1]}` },
    { pattern: /^用户 ID (.+)$/, replace: (match) => `User ID ${match[1]}` },
    { pattern: /^(.+?) · (组长|成员)$/, replace: (match, language) => `${match[1]} · ${translateTextCore(match[2], language)}` },
    { pattern: /^(.+?)成员$/, replace: (match, language) => `${match[1]} ${translateTextCore("成员", language)}s` },
    { pattern: /^值 (\d+)$/, replace: (match) => `Value ${match[1]}` },
    { pattern: /^(.+?)暂无详细数据$/, replace: (match, language) => `No detailed data for ${translateTextCore(match[1], language)}` },
    { pattern: /^创建：(.+)$/, replace: (match) => `Created: ${match[1]}` },
    { pattern: /^更新：(.+)$/, replace: (match) => `Updated: ${match[1]}` },
    { pattern: /^创建者：(.+)$/, replace: (match) => `Created by: ${match[1]}` },
    { pattern: /^标签：(.+)$/, replace: (match) => `Tag: ${match[1]}` },
    { pattern: /^关键词：(.+)$/, replace: (match) => `Keyword: ${match[1]}` },
    { pattern: /^仅转发指定应用（(\d+)\s*个）$/, replace: (match) => `Selected Apps Only (${match[1]})` },
    { pattern: /^还有\s*(\d+)\s*名成员，点击“查看全部成员”查看完整列表。$/, replace: (match) => `${match[1]} more members. Click "View All Members" to see the full list.` },
    { pattern: /^当前已使用\s*(\d+)\s*\/\s*(\d+)\s*个待完成事项。请先完成或删除部分待办，或前往“订阅套餐”开通 Pro。$/, replace: (match) => `You are using ${match[1]} / ${match[2]} pending todo slots. Complete or delete some todos first, or open "Subscription Plans" and upgrade to Pro.` },
    { pattern: /^当前已使用\s*(\d+)\s*\/\s*(\d+)\s*个共享团队名额，免费用户暂时无法(.+)。请先退出部分团队，或前往“订阅套餐”开通 Pro。$/, replace: (match, language) => `You are using ${match[1]} / ${match[2]} shared team slots. Free users cannot ${translateTextCore(match[3], language)} right now. Leave some teams first, or open "Subscription Plans" and upgrade to Pro.` },
    { pattern: /^使用\s*(\d+)\s*个兑换点兑换\s*(\d+)\s*天 Pro 权限。$/, replace: (match) => `Use ${match[1]} points to redeem ${match[2]} ${Number(match[2]) === 1 ? "day" : "days"} of Pro access.` },
    { pattern: /^(.+)已完成$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} completed` },
    { pattern: /^(.+)已移除$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} removed` },
    { pattern: /^加载(.+)失败$/, replace: (match, language) => `Failed to load ${translateTextCore(match[1], language)}` },
    { pattern: /^保存(.+)失败$/, replace: (match, language) => `Failed to save ${translateTextCore(match[1], language)}` },
    { pattern: /^删除(.+)失败$/, replace: (match, language) => `Failed to delete ${translateTextCore(match[1], language)}` },
    { pattern: /^更新(.+)失败$/, replace: (match, language) => `Failed to update ${translateTextCore(match[1], language)}` },
    { pattern: /^获取(.+)失败$/, replace: (match, language) => `Failed to get ${translateTextCore(match[1], language)}` },
    { pattern: /^发送(.+)失败$/, replace: (match, language) => `Failed to send ${translateTextCore(match[1], language)}` },
    { pattern: /^复制(.+)失败，请手动复制$/, replace: (match, language) => `Failed to copy ${translateTextCore(match[1], language)}. Please copy it manually.` },
    { pattern: /^请填写(.+)$/, replace: (match, language) => `Please enter ${translateTextCore(match[1], language)}` },
    { pattern: /^请输入(.+)$/, replace: (match, language) => `Please enter ${translateTextCore(match[1], language)}` },
    { pattern: /^(.+)已更新$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} updated` },
    { pattern: /^(.+)已创建$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} created` },
    { pattern: /^(.+)已删除$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} deleted` },
    { pattern: /^(.+)已保存$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} saved` },
    { pattern: /^(.+)已提交$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} submitted` },
    { pattern: /^(.+)已发送$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} sent` },
    { pattern: /^(.+)已复制$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} copied` },
    { pattern: /^(.+)已清空$/, replace: (match, language) => `${capitalizeText(translateTextCore(match[1], language))} cleared` },
    { pattern: /^暂无(.+)$/, replace: (match, language) => `No ${translateTextCore(match[1], language)}` },
    { pattern: /^没有符合条件的(.+)$/, replace: (match, language) => `No matching ${translateTextCore(match[1], language)}` },
    { pattern: /^确定删除这条待办吗？$/, replace: () => "Delete this todo?" },
    { pattern: /^确定删除这条便签吗？$/, replace: () => "Delete this note?" },
    { pattern: /^确定退出该小组吗？$/, replace: () => "Leave this group?" },
    { pattern: /^确定删除这个小组吗？删除后成员协作关系会一并移除。$/, replace: () => "Delete this group? Member collaboration will also be removed." },
    { pattern: /^确定移除该成员吗？$/, replace: () => "Remove this member?" },
    { pattern: /^确定删除这篇帖子吗？$/, replace: () => "Delete this post?" },
    { pattern: /^确定清空全部计划任务吗？此操作不可撤销。$/, replace: () => "Clear all scheduled tasks? This cannot be undone." },
    { pattern: /^确定删除这个分类吗？$/, replace: () => "Delete this category?" },
    { pattern: /^确认删除这个兑换码吗？删除后不可恢复。$/, replace: () => "Delete this redemption code? This cannot be undone." },
    { pattern: /^确认删除当前筛选条件下的全部兑换码（(.+)）吗？删除后不可恢复。$/, replace: (match, language) => `Delete all redemption codes under the current filter (${translateCommaSeparatedText(match[1], language)})? This cannot be undone.` },
    { pattern: /^确认删除「(.+)」渠道配置吗？$/, replace: (match, language) => `Delete the "${translateTextCore(match[1], language)}" channel configuration?` },
    { pattern: /^确定删除任务 (.+) 吗？$/, replace: (match) => `Delete task ${match[1]}?` },
    { pattern: /^提醒：(.+)$/, replace: (match) => `Reminder: ${match[1]}` },
    { pattern: /^请完善这些必填项：(.+)$/, replace: (match, language) => `Please complete these required fields: ${translateDelimitedText(match[1], language)}` },
    { pattern: /^已成功兑换 (\d+) 天 Pro 权限$/, replace: (match) => `Successfully redeemed ${match[1]} ${Number(match[1]) === 1 ? "day" : "days"} of Pro` },
    { pattern: /^邀请码已复制：(.+)$/, replace: (match) => `Invite code copied: ${match[1]}` }
]);
const originalTextNodeValues = new WeakMap();
const originalAttributeValues = new WeakMap();
const originalFormValues = new WeakMap();
let languageObserver = null;
let applyingLanguage = false;
const nativeWindowConfirm = window.confirm.bind(window);
const nativeWindowAlert = typeof window.alert === "function" ? window.alert.bind(window) : null;
const WEATHER_TITLE_CANDIDATES = [
    "date", "fx_date", "day", "week", "weekday",
    "time", "fx_time", "datetime", "timestamp", "hour"
];
const WEATHER_SECTION_LABELS = {
    forecast: "预报",
    hourly: "小时",
    minutely: "分钟",
    indices: "指数"
};
const WEATHER_KEY_LABELS = {
    province: "省份",
    city: "城市",
    district: "区县",
    adcode: "行政区编码",
    weather: "天气",
    weather_icon: "天气图标",
    temperature: "温度",
    wind_direction: "风向",
    wind_power: "风力",
    humidity: "湿度",
    report_time: "更新时间",
    feels_like: "体感温度",
    visibility: "能见度",
    pressure: "气压",
    uv_index: "紫外线指数",
    uv: "紫外线指数",
    aqi: "空气质量",
    pm2_5: "PM2.5",
    pm10: "PM10",
    so2: "SO2",
    no2: "NO2",
    o3: "O3",
    co: "CO",
    sunrise: "日出",
    sunset: "日落",
    temp_max: "最高温度",
    temp_min: "最低温度",
    max: "最高温度",
    min: "最低温度",
    high: "最高温度",
    low: "最低温度",
    wind_speed: "风速",
    precip: "降水量",
    precipitation: "降水量",
    text_day: "白天天气",
    text_night: "夜间天气",
    icon_day: "白天图标",
    icon_night: "夜间图标",
    week: "星期",
    fx_date: "日期",
    fx_time: "时间",
    day: "日期",
    time: "时间",
    summary: "摘要",
    category: "类型",
    name: "名称",
    level: "等级",
    desc: "说明",
    details: "详情",
    probability: "概率",
    pop: "降水概率"
};
const REPEAT_WEEKDAY_MASKS = {
    monday: 1 << 0,
    tuesday: 1 << 1,
    wednesday: 1 << 2,
    thursday: 1 << 3,
    friday: 1 << 4,
    saturday: 1 << 5,
    sunday: 1 << 6
};

const MODULE_META = {
    todo: { title: "待办事项", subtitle: "任务、提醒与月度总览" },
    sticky: { title: "便签笔记", subtitle: "按日期整理笔记与图文便签" },
    pomodoro: { title: "番茄钟", subtitle: "本地专注计时与执行节奏管理" },
    groups: { title: "我的组", subtitle: "团队成员与共享待办协作" },
    community: { title: "社区交流", subtitle: "帖子流、发帖、帖子管理、用户管理" },
    profile: { title: "个人中心", subtitle: "资料设置与渠道设置" },
    redemption: { title: "兑换中心", subtitle: "邀请码、兑换点与 Pro 权限兑换" },
    plans: { title: "订阅套餐", subtitle: "查看会员状态并同步订阅时长" },
    weather: { title: "天气预报", subtitle: "天气查询、天气提醒与未来趋势" }
};
const SUBSCRIPTION_PLANS = {
    monthly: {
        id: "monthly",
        title: "月度会员",
        content: "vip_monthly",
        amount: 9.9,
        monthsToAdd: 1
    },
    yearly: {
        id: "yearly",
        title: "年度会员",
        content: "vip_yearly",
        amount: 99,
        monthsToAdd: 12
    }
};
const QUOTA_DEFAULTS = Object.freeze({
    pendingTodoLimit: 10,
    groupMembershipLimit: 2,
    apiRequestLimitPer24Hours: 1000,
    notificationSendLimitPerMinute: 50,
    freeNotificationContentLimitPerDay: 5
});
const CHANNEL_TYPES = [
    { type: "dingtalk_group", name: "钉钉群机器人", icon: "icon_dingtalk.webp" },
    { type: "dingtalk_inner", name: "钉钉企业机器人", icon: "icon_dingtalk_inner.webp" },
    { type: "wework_robot", name: "企业微信机器人", icon: "icon_wework_robot.webp" },
    { type: "wework_agent", name: "企业微信应用消息", icon: "icon_wework_agent.webp" },
    { type: "feishu", name: "飞书群机器人", icon: "icon_feishu.webp" },
    { type: "feishu_app", name: "飞书企业应用", icon: "icon_feishu_app.webp" },
    { type: "gotify", name: "Gotify", icon: "icon_gotify.webp" },
    { type: "email", name: "邮箱", icon: "icon_email.webp" },
    { type: "bark", name: "Bark", icon: "icon_bark.webp" },
    { type: "socket", name: "Socket 通道", icon: "icon_socket.webp" },
    { type: "webhook", name: "Webhook 回调", icon: "icon_webhook.webp" },
    { type: "telegram", name: "Telegram", icon: "icon_telegram.webp" },
    { type: "serverchan", name: "Server酱", icon: "icon_serverchan.webp" },
    { type: "pushplus", name: "PushPlus", icon: "icon_pushplus.webp" },
    { type: "qmsg", name: "Qmsg", icon: "icon_qmsg.webp" },
    { type: "discord_bot", name: "Discord 机器人", icon: "icon_discord.webp" },
    { type: "sms", name: "短信", icon: "icon_sms.webp" }
];
const UI_ASSETS = Object.freeze({
    defaultAvatar: "assets/images/illustrations/avatar.png"
});
const DEFAULT_PRO_PRIVILEGE_PROMPT = Object.freeze({
    eyebrow: "社区发帖",
    title: "Pro用户专享发帖特权",
    copy: "Pro用户专享发帖特权。升级为 Pro 后即可在社区发布帖子、分享经验与进展。当前仍可继续浏览帖子流和互动内容。"
});

function getChannelTypeMeta(type) {
    return CHANNEL_TYPES.find((item) => item.type === type) || null;
}

function getChannelIconPath(type) {
    const meta = getChannelTypeMeta(type);
    return meta?.icon ? `assets/images/channels/${meta.icon}` : "";
}

function buildChannelIconMarkup(type, label) {
    const iconPath = getChannelIconPath(type);
    if (!iconPath) {
        return "";
    }
    return `<span class="channel-item-media"><img src="${escapeHtml(iconPath)}" alt="${escapeHtml(label || type)} 图标"></span>`;
}

function getUserAvatarPath(userLike) {
    const avatarUrl = String(userLike?.avatarUrl || userLike?.authorAvatarUrl || userLike?.avatar || "").trim();
    return avatarUrl || UI_ASSETS.defaultAvatar;
}

function buildUserAvatarMarkup(userLike, label, size = "default") {
    const avatarPath = getUserAvatarPath(userLike);
    const sizeClass = size === "sm" ? " entity-avatar-small" : "";
    return `<span class="entity-avatar${sizeClass}"><img src="${escapeHtml(avatarPath)}" alt="${escapeHtml(`${label || "用户"}头像`)}" onerror="this.onerror=null;this.src='${UI_ASSETS.defaultAvatar}'"></span>`;
}

function createChannelField(key, label, inputType = "text", extra = {}) {
    return {
        key,
        label,
        inputType,
        required: !!extra.required,
        hint: extra.hint || "",
        options: Array.isArray(extra.options) ? extra.options : [],
        defaultValue: extra.defaultValue,
        requiresAppForwarding: !!extra.requiresAppForwarding
    };
}

const CHANNEL_DEFINITIONS = {
    dingtalk_group: {
        description: "向钉钉群机器人发送提醒消息。",
        fields: [
            createChannelField("webhook", "Webhook 地址", "text", { required: true }),
            createChannelField("secret", "签名密钥", "secret")
        ]
    },
    dingtalk_inner: {
        description: "通过钉钉企业机器人发送内部提醒消息。",
        fields: [
            createChannelField("appKey", "App Key", "text", { required: true }),
            createChannelField("appSecret", "App Secret", "secret", { required: true }),
            createChannelField("userIds", "用户 ID 列表", "text", { required: true, hint: "多个 ID 请使用逗号分隔。" }),
            createChannelField("msgKey", "消息类型", "choice", {
                options: [
                    { value: "sampleText", label: "文本" },
                    { value: "sampleMarkdown", label: "Markdown" }
                ],
                defaultValue: "sampleText"
            })
        ]
    },
    wework_robot: {
        description: "向企业微信群机器人发送提醒消息。",
        fields: [
            createChannelField("webhook", "Webhook 地址", "text", { required: true }),
            createChannelField("mentionAll", "@所有人", "toggle", { defaultValue: "false" })
        ]
    },
    wework_agent: {
        description: "通过企业微信应用推送提醒消息。",
        fields: [
            createChannelField("corpId", "企业 ID", "text", { required: true }),
            createChannelField("agentId", "应用 AgentId", "text", { required: true }),
            createChannelField("secret", "应用 Secret", "secret", { required: true }),
            createChannelField("toUser", "接收用户", "text", { hint: "默认值为 @all。", defaultValue: "@all" }),
            createChannelField("toParty", "接收部门", "text"),
            createChannelField("toTag", "接收标签", "text"),
            createChannelField("customizeApi", "自定义接口地址", "text", {
                hint: "可选，默认使用 https://qyapi.weixin.qq.com。",
                defaultValue: "https://qyapi.weixin.qq.com"
            })
        ]
    },
    feishu: {
        description: "向飞书群机器人发送提醒消息。",
        fields: [
            createChannelField("webhook", "Webhook 地址", "text", { required: true }),
            createChannelField("secret", "签名密钥", "secret")
        ]
    },
    feishu_app: {
        description: "通过飞书企业应用推送提醒消息。",
        fields: [
            createChannelField("appId", "App ID", "text", { required: true }),
            createChannelField("appSecret", "App Secret", "secret", { required: true }),
            createChannelField("receiveId", "接收对象 ID", "text", { required: true }),
            createChannelField("receiveIdType", "接收对象类型", "choice", {
                options: [
                    { value: "user_id", label: "用户 ID" },
                    { value: "open_id", label: "Open ID" },
                    { value: "email", label: "邮箱" },
                    { value: "chat_id", label: "群聊 ID" }
                ],
                defaultValue: "user_id"
            })
        ]
    },
    gotify: {
        description: "向 Gotify 服务端发送提醒消息。",
        fields: [
            createChannelField("serverUrl", "消息接口地址", "text", { required: true }),
            createChannelField("title", "标题", "text"),
            createChannelField("priority", "优先级", "number", { hint: "默认值为 5。" })
        ]
    },
    email: {
        description: "使用服务端 SMTP 配置发送提醒邮件。",
        fields: [
            createChannelField("recipientEmail", "收件邮箱", "text", { hint: "仅用于通知投递。" })
        ]
    },
    bark: {
        description: "通过 Bark 向 iPhone 发送提醒通知。",
        fields: [
            createChannelField("serverUrl", "Bark 服务地址", "text", { required: true }),
            createChannelField("group", "分组", "text"),
            createChannelField("sound", "提示音", "text"),
            createChannelField("level", "推送级别", "choice", {
                options: [
                    { value: "active", label: "主动提醒" },
                    { value: "timeSensitive", label: "时效提醒" },
                    { value: "passive", label: "被动提醒" }
                ],
                defaultValue: "active"
            })
        ]
    },
    socket: {
        description: "通过 TCP、UDP 或 MQTT 发送提醒消息。",
        fields: [
            createChannelField("method", "协议", "choice", {
                options: [
                    { value: "MQTT", label: "MQTT" },
                    { value: "TCP", label: "TCP" },
                    { value: "UDP", label: "UDP" }
                ],
                defaultValue: "MQTT"
            }),
            createChannelField("address", "地址", "text", { required: true }),
            createChannelField("port", "端口", "number"),
            createChannelField("messageTemplate", "消息模板", "multiline", { hint: "留空时将发送默认提醒内容。" }),
            createChannelField("response", "成功响应关键字", "text", { hint: "可选，设置后返回内容必须包含该文本。" }),
            createChannelField("username", "用户名", "text"),
            createChannelField("password", "密码", "secret"),
            createChannelField("inCharset", "输入编码", "text", { defaultValue: "UTF-8" }),
            createChannelField("outCharset", "输出编码", "text", { defaultValue: "UTF-8" }),
            createChannelField("inMessageTopic", "MQTT 接收主题", "text"),
            createChannelField("outMessageTopic", "MQTT 发送主题", "text"),
            createChannelField("uriType", "MQTT 协议类型", "choice", {
                options: [
                    { value: "tcp", label: "tcp" },
                    { value: "ssl", label: "ssl" },
                    { value: "ws", label: "ws" },
                    { value: "wss", label: "wss" }
                ],
                defaultValue: "tcp"
            }),
            createChannelField("path", "MQTT 路径", "text"),
            createChannelField("clientId", "客户端 ID", "text"),
            createChannelField("qos", "QoS", "choice", {
                options: [
                    { value: "0", label: "0" },
                    { value: "1", label: "1" },
                    { value: "2", label: "2" }
                ],
                defaultValue: "0"
            }),
            createChannelField("retained", "保留消息", "toggle", { defaultValue: "false" })
        ]
    },
    webhook: {
        description: "将提醒负载发送到任意 HTTP 接口。",
        fields: [
            createChannelField("url", "请求地址", "text", { required: true }),
            createChannelField("method", "请求方法", "choice", {
                options: [
                    { value: "POST", label: "POST" },
                    { value: "PUT", label: "PUT" },
                    { value: "PATCH", label: "PATCH" },
                    { value: "GET", label: "GET" }
                ],
                defaultValue: "POST"
            }),
            createChannelField("headersJson", "请求头 JSON", "multiline", { hint: "例如：{\"Authorization\":\"Bearer xxx\"}" }),
            createChannelField("bodyTemplate", "请求体模板", "multiline", { hint: "支持 {{title}}、{{description}}、{{group}}、{{remind_time}}、{{message}} 等占位符。" })
        ]
    },
    telegram: {
        description: "通过 Telegram Bot 发送提醒消息。",
        fields: [
            createChannelField("apiToken", "Bot Token 或接口地址", "text", { required: true }),
            createChannelField("chatId", "聊天 ID", "text", { required: true }),
            createChannelField("messageThreadId", "话题 ID", "text"),
            createChannelField("parseMode", "解析模式", "choice", {
                options: [
                    { value: "HTML", label: "HTML" },
                    { value: "MarkdownV2", label: "MarkdownV2" },
                    { value: "TEXT", label: "纯文本" }
                ],
                defaultValue: "HTML"
            })
        ]
    },
    serverchan: {
        description: "通过 Server酱 推送提醒消息。",
        fields: [
            createChannelField("sendKey", "SendKey", "text", { required: true }),
            createChannelField("channel", "渠道", "text"),
            createChannelField("openId", "OpenID / 群组", "text")
        ]
    },
    pushplus: {
        description: "通过 PushPlus 推送提醒消息。",
        fields: [
            createChannelField("token", "Token", "text", { required: true }),
            createChannelField("website", "站点", "choice", {
                options: [
                    { value: "www.pushplus.plus", label: "www.pushplus.plus" },
                    { value: "pushplus.hxtrip.com", label: "pushplus.hxtrip.com" }
                ],
                defaultValue: "www.pushplus.plus"
            }),
            createChannelField("topic", "主题", "text"),
            createChannelField("template", "模板", "choice", {
                options: [
                    { value: "", label: "默认" },
                    { value: "html", label: "HTML" },
                    { value: "markdown", label: "Markdown" }
                ],
                defaultValue: ""
            }),
            createChannelField("channel", "渠道", "text")
        ]
    },
    qmsg: {
        description: "通过 Qmsg 向 QQ 用户或 QQ 群发送提醒消息。",
        fields: [
            createChannelField("key", "密钥", "secret", { required: true }),
            createChannelField("qq", "QQ 号 / 群号", "text", { required: true }),
            createChannelField("sendType", "发送目标", "choice", {
                options: [
                    { value: "send", label: "个人" },
                    { value: "group", label: "QQ群" }
                ],
                defaultValue: "send"
            }),
            createChannelField("messageTemplate", "消息模板", "multiline", { hint: "可选，支持常见提醒占位符。" })
        ]
    },
    discord_bot: {
        description: "通过 Discord Webhook 发送提醒消息。",
        fields: [
            createChannelField("webhookUrl", "Webhook 地址", "text", { required: true }),
            createChannelField("contentTemplate", "内容模板", "multiline", { hint: "可选，支持常见提醒占位符。" }),
            createChannelField("username", "用户名", "text"),
            createChannelField("avatarUrl", "头像地址", "text")
        ]
    },
    sms: {
        description: "在 Android 设备本地发送提醒短信。",
        clientSideOnly: true,
        fields: [
            createChannelField("phoneNumbers", "手机号列表", "text", { required: true, hint: "多个号码请使用逗号分隔。" }),
            createChannelField("simSlot", "发送使用的 SIM 卡", "choice", {
                options: [
                    { value: "1", label: "SIM 1" },
                    { value: "2", label: "SIM 2" }
                ],
                defaultValue: "1"
            }),
            createChannelField("onlyNoNetwork", "仅无网络时发送", "toggle", {
                defaultValue: "false",
                requiresAppForwarding: true,
                hint: "设备无网络时由 Android 短信转发使用。"
            })
        ]
    }
};

// STATE
const state = {
    authToken: loadString("authToken", ""),
    refreshToken: loadString("refreshToken", ""),
    currentUser: safeParse(loadString("currentUser", "")),
    activeModule: "todo",
    connection: null,
    currentReminderTodo: null,
    ui: {
        mobileNavOpen: false,
        language: loadString(UI_LANGUAGE_STORAGE_KEY, SUPPORTED_UI_LANGUAGES.zh)
    },
    todo: {
        items: [],
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        completedCount: 0,
        selectedDate: "",
        calendarMonth: startOfMonth(new Date()),
        dayDetail: [],
        currentView: "list",
        filters: {
            scope: "All",
            status: "",
            priority: "",
            keyword: "",
            groupId: ""
        }
    },
    sticky: {
        items: [],
        selectedDate: "",
        calendarMonth: startOfMonth(new Date()),
        currentView: "list"
    },
    pomodoro: {
        phase: "focus",
        isRunning: false,
        remainingSeconds: 25 * 60,
        sessionsCompleted: Number(loadString("pomodoroSessionsCompleted", "0")),
        focusedSeconds: Number(loadString("pomodoroFocusedSeconds", "0")),
        timerHandle: null,
        currentTask: "",
        focusMinutes: 25,
        shortBreak: 5,
        longBreak: 15,
        cycle: 0
    },
    groups: {
        items: [],
        selectedId: null,
        members: {}
    },
    community: {
        bootstrap: null,
        tab: "feed",
        categoryId: "all",
        managePostStatus: "all",
        managePostKeyword: "",
        manageUserFilter: "all",
        manageUserKeyword: "",
        detail: {
            currentPostId: null,
            editingCommentId: null,
            editingCommentContent: "",
            deletingCommentId: null
        },
        admin: {
            connections: [],
            jobs: []
        }
    },
    profile: {
        info: null,
        settings: null,
        tab: "basic",
        editingChannelRows: [],
        appForwarding: normalizeAppForwardingSettings(safeParse(loadString(APP_FORWARDING_STORAGE_KEY, "")))
    },
    redemption: {
        summary: null,
        adminCodes: [],
        adminFilter: "all",
        adminKeyword: "",
        adminTag: "",
        adminTags: [],
        lastGeneratedCodes: []
    },
    plans: {
        paymentChannel: loadString("planPaymentChannel", "alipay"),
        currentPayment: normalizePlanPaymentState(safeParse(loadString(CURRENT_PAYMENT_STORAGE_KEY, "")))
    },
    quota: {
        summary: null,
        loaded: false,
        lastLoadedAt: 0
    },
    weather: {
        payload: null,
        location: "",
        summary: "",
        lastQuery: ""
    }
};

// HELPERS
function loadString(key, fallback) {
    const value = localStorage.getItem(key);
    return value == null || value === "" ? fallback : value;
}

function saveString(key, value) {
    if (value == null || value === "") {
        localStorage.removeItem(key);
        return;
    }
    localStorage.setItem(key, String(value));
}

function safeParse(text) {
    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}

function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function qs(id) {
    return document.getElementById(id);
}

function normalizeLanguage(language) {
    return /^en/i.test(String(language || "").trim()) ? SUPPORTED_UI_LANGUAGES.en : SUPPORTED_UI_LANGUAGES.zh;
}

function isEnglishLanguage(language = state.ui.language) {
    return normalizeLanguage(language) === SUPPORTED_UI_LANGUAGES.en;
}

function capitalizeText(value) {
    const text = String(value || "");
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

function translateDelimitedText(value, language = state.ui.language) {
    return String(value || "")
        .split(/、/)
        .map((item) => translateTextCore(item.trim(), language))
        .join(", ");
}

function translateCommaSeparatedText(value, language = state.ui.language) {
    return String(value || "")
        .split(/，/)
        .map((item) => translateTextCore(item.trim(), language))
        .join(", ");
}

function translateSegmentedText(value, language = state.ui.language) {
    const text = String(value || "");
    for (const rule of TRANSLATION_SEGMENT_RULES) {
        if (!text.includes(rule.source)) {
            continue;
        }
        const rawParts = text.split(rule.source);
        const parts = rawParts.map((item) => translateTextCore(item, language));
        if (parts.some((item, index) => item !== rawParts[index])) {
            return parts.join(rule.target);
        }
    }
    return text;
}

function translateTextCore(value, language = state.ui.language) {
    const text = String(value ?? "");
    if (!text || !isEnglishLanguage(language)) {
        return text;
    }

    const direct = EN_TEXT_MAP[text];
    if (direct) {
        return direct;
    }

    for (const rule of EN_TEXT_RULES) {
        const match = text.match(rule.pattern);
        if (match) {
            return rule.replace(match, language);
        }
    }

    const segmented = translateSegmentedText(text, language);
    if (segmented !== text) {
        return segmented;
    }

    return text;
}

function translateText(value, language = state.ui.language) {
    const text = String(value ?? "");
    if (!text || !isEnglishLanguage(language)) {
        return text;
    }

    const match = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const leading = match?.[1] || "";
    const core = match?.[2] || "";
    const trailing = match?.[3] || "";
    return `${leading}${translateTextCore(core, language)}${trailing}`;
}

function getLocalizedWeatherTodoTitle() {
    return translateText(WEATHER_TODO_TITLE);
}

function getAttributeOriginalMap(element) {
    if (!originalAttributeValues.has(element)) {
        originalAttributeValues.set(element, new Map());
    }
    return originalAttributeValues.get(element);
}

function shouldSkipTranslationNode(node) {
    const element = node?.parentElement || (node?.nodeType === Node.ELEMENT_NODE ? node : null);
    return !!element?.closest("[data-i18n-skip='true'], [contenteditable='true'], script, style");
}

function translateFormControlValue(element) {
    if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
        return;
    }

    if (!TRANSLATABLE_VALUE_IDS.has(element.id)) {
        return;
    }

    if (!originalFormValues.has(element)) {
        originalFormValues.set(element, element.defaultValue || element.value || "");
    }

    const original = originalFormValues.get(element);
    const translated = translateText(original, SUPPORTED_UI_LANGUAGES.en);
    const current = element.value;
    const useEnglish = isEnglishLanguage();
    const nextValue = useEnglish ? translated : original;
    const previousValue = useEnglish ? original : translated;

    if (current === previousValue || current === original || current === translated || current === "") {
        element.value = nextValue;
    }
    element.defaultValue = nextValue;
}

function applyLanguageToNode(node) {
    if (!node || shouldSkipTranslationNode(node)) {
        return;
    }

    if (node.nodeType === Node.TEXT_NODE) {
        if (!originalTextNodeValues.has(node)) {
            originalTextNodeValues.set(node, node.nodeValue);
        }
        const original = originalTextNodeValues.get(node);
        const next = isEnglishLanguage() ? translateText(original) : original;
        if (node.nodeValue !== next) {
            node.nodeValue = next;
        }
        return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
    }

    TRANSLATABLE_ATTRIBUTES.forEach((attribute) => {
        if (!node.hasAttribute(attribute)) {
            return;
        }
        const attributeMap = getAttributeOriginalMap(node);
        if (!attributeMap.has(attribute)) {
            attributeMap.set(attribute, node.getAttribute(attribute));
        }
        const original = attributeMap.get(attribute);
        const next = isEnglishLanguage() ? translateText(original) : original;
        if (node.getAttribute(attribute) !== next) {
            node.setAttribute(attribute, next);
        }
    });

    translateFormControlValue(node);
}

function applyLanguageToSubtree(root = document.body) {
    if (!root) {
        return;
    }

    applyingLanguage = true;
    try {
        if (root.nodeType === Node.TEXT_NODE) {
            applyLanguageToNode(root);
            return;
        }

        if (root.nodeType === Node.ELEMENT_NODE) {
            applyLanguageToNode(root);
        }

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let current = walker.currentNode;
        while (current) {
            if (current !== root) {
                applyLanguageToNode(current);
            }
            current = walker.nextNode();
        }
    } finally {
        applyingLanguage = false;
    }
}

function updateLanguageToggle() {
    document.querySelectorAll("[data-language-option]").forEach((button) => {
        const active = normalizeLanguage(button.dataset.languageOption) === normalizeLanguage(state.ui.language);
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

function applyLanguageSettings() {
    document.documentElement.lang = normalizeLanguage(state.ui.language);
    document.title = translateText("待办提醒门户");
    updateLanguageToggle();
    if (qs("settingsLanguage")) {
        qs("settingsLanguage").value = normalizeLanguage(state.ui.language);
    }
    applyLanguageToSubtree(document.body);
}

function rerenderLanguageSensitiveUi() {
    const activeAuthTab = document.querySelector(".auth-tab.active")?.dataset.authTab || "login";
    setAuthFormsVisible(activeAuthTab);
    setHeaderByModule(state.activeModule || "todo");
    updateHeaderUserBadges();

    switch (state.activeModule) {
        case "todo":
            renderTodos();
            renderTodoDayDetail();
            break;
        case "sticky":
            renderStickyNotes();
            renderStickyCalendar();
            renderStickyDaySummary();
            break;
        case "pomodoro":
            renderPomodoro();
            break;
        case "groups":
            renderGroups();
            break;
        case "community":
            if (state.community.bootstrap) {
                renderCommunity();
                if (state.community.detail.currentPostId) {
                    renderCommunityPostDetail();
                }
            }
            break;
        case "profile":
            renderProfile();
            break;
        case "redemption":
            renderRedemption();
            break;
        case "plans":
            renderPlans();
            break;
        case "weather":
            renderWeather();
            break;
        default:
            break;
    }

    if (qs("channelModal")?.classList.contains("show")) {
        syncChannelModalSelection();
    }
    if (qs("todoModal")?.classList.contains("show")) {
        const todoMode = qs("todoMode").value;
        const editingTodo = !!qs("todoId").value;
        qs("todoModalTitle").textContent = todoMode === "weather"
            ? (editingTodo ? "编辑天气提醒" : "新增天气提醒")
            : (editingTodo ? "编辑待办" : "新增待办");
        updateTodoModeSections();
    }
    if (qs("noteModal")?.classList.contains("show")) {
        qs("noteModalTitle").textContent = qs("noteId").value ? "编辑便签" : "新建便签";
    }
    if (qs("groupModal")?.classList.contains("show")) {
        qs("groupModalTitle").textContent = qs("groupId").value ? "编辑小组" : "创建小组";
    }
}

function setLanguage(language, options = {}) {
    const normalized = normalizeLanguage(language);
    if (state.ui.language === normalized && !options.force) {
        updateLanguageToggle();
        return;
    }

    state.ui.language = normalized;
    if (options.persist !== false) {
        saveString(UI_LANGUAGE_STORAGE_KEY, normalized);
    }
    applyLanguageSettings();
    rerenderLanguageSensitiveUi();
    applyLanguageToSubtree(document.body);
}

function bindLanguageControls() {
    document.querySelectorAll("[data-language-option]").forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
    });

    qs("settingsLanguage")?.addEventListener("change", (event) => {
        setLanguage(event.target.value);
    });
}

function ensureLanguageObserver() {
    if (languageObserver || !document.body) {
        return;
    }

    languageObserver = new MutationObserver((mutations) => {
        if (applyingLanguage) {
            return;
        }

        mutations.forEach((mutation) => {
            if (mutation.type === "characterData") {
                applyLanguageToSubtree(mutation.target);
                return;
            }

            if (mutation.type === "attributes") {
                applyLanguageToSubtree(mutation.target);
                return;
            }

            mutation.addedNodes.forEach((node) => applyLanguageToSubtree(node));
        });
    });

    languageObserver.observe(document.body, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: TRANSLATABLE_ATTRIBUTES
    });
}

window.confirm = (message) => nativeWindowConfirm(translateText(message));
if (nativeWindowAlert) {
    window.alert = (message) => nativeWindowAlert(translateText(message));
}

async function copyTextToClipboard(text) {
    const value = String(text ?? "").trim();
    if (!value) {
        return false;
    }

    if (navigator.clipboard?.writeText) {
        try {
            await navigator.clipboard.writeText(value);
            return true;
        } catch (error) {
            console.warn("Clipboard API 复制失败，尝试降级方案", error);
        }
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    const copied = typeof document.execCommand === "function" && document.execCommand("copy");
    document.body.removeChild(textarea);
    return !!copied;
}

function startOfMonth(value) {
    const date = new Date(value);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
}

function createId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID().replace(/-/g, "");
    }

    return `${Date.now().toString(16)}${Math.random().toString(16).slice(2, 12)}`;
}

function toCamelKey(key) {
    return key ? key.charAt(0).toLowerCase() + key.slice(1) : key;
}

function isDotNetMetadataKey(key) {
    const normalizedKey = String(key || "");
    return normalizedKey === "$id" || normalizedKey === "$ref" || normalizedKey === "$type";
}

function isDotNetCollectionWrapper(value) {
    if (!value || typeof value !== "object" || !Array.isArray(value.$values)) {
        return false;
    }

    return Object.keys(value).every((key) => key === "$values" || isDotNetMetadataKey(key));
}

function normalizePayload(value) {
    if (Array.isArray(value)) {
        return value.map(normalizePayload);
    }

    if (value && typeof value === "object") {
        if (isDotNetCollectionWrapper(value)) {
            return value.$values.map(normalizePayload);
        }

        const next = {};
        Object.keys(value).forEach((key) => {
            if (isDotNetMetadataKey(key)) {
                return;
            }
            next[toCamelKey(key)] = normalizePayload(value[key]);
        });
        return next;
    }

    return value;
}

function unwrapCollection(value) {
    if (Array.isArray(value)) {
        return value;
    }

    if (value && Array.isArray(value.$values)) {
        return value.$values;
    }

    if (value && Array.isArray(value.values)) {
        return value.values;
    }

    return [];
}

function normalizePriorityCode(priority) {
    if (typeof priority === "number") {
        if (priority === 3) return "High";
        if (priority === 1) return "Low";
        return "Medium";
    }

    const text = String(priority || "Medium").toLowerCase();
    if (text === "high") return "High";
    if (text === "low") return "Low";
    return "Medium";
}

function getPriorityLabel(priority) {
    const normalized = normalizePriorityCode(priority);
    if (normalized === "High") return "高优先级";
    if (normalized === "Low") return "低优先级";
    return "中优先级";
}

function normalizeUser(user) {
    const normalized = normalizePayload(user || {});
    return {
        id: Number(normalized.id || 0),
        userName: String(normalized.userName || ""),
        email: String(normalized.email || ""),
        displayName: String(normalized.displayName || ""),
        avatarUrl: String(normalized.avatarUrl || ""),
        isAdmin: !!normalized.isAdmin,
        isPro: !!normalized.isPro,
        proExpireAtUtc: normalized.proExpireAtUtc || "",
        inviteCode: String(normalized.inviteCode || ""),
        proExchangePointBalance: Number(normalized.proExchangePointBalance || 0),
        isActive: normalized.isActive !== false,
        createTime: normalized.createTime || ""
    };
}

function normalizeQuotaSummary(summary) {
    const normalized = normalizePayload(summary || {});
    return {
        isPro: !!normalized.isPro,
        pendingTodoCount: Number(normalized.pendingTodoCount || 0),
        pendingTodoLimit: Number(normalized.pendingTodoLimit || QUOTA_DEFAULTS.pendingTodoLimit),
        groupMembershipCount: Number(normalized.groupMembershipCount || 0),
        groupMembershipLimit: Number(normalized.groupMembershipLimit || QUOTA_DEFAULTS.groupMembershipLimit),
        apiRequestLimitPer24Hours: Number(normalized.apiRequestLimitPer24Hours || QUOTA_DEFAULTS.apiRequestLimitPer24Hours),
        notificationSendLimitPerMinute: Number(normalized.notificationSendLimitPerMinute || QUOTA_DEFAULTS.notificationSendLimitPerMinute),
        freeNotificationContentLimitPerDay: Number(normalized.freeNotificationContentLimitPerDay || QUOTA_DEFAULTS.freeNotificationContentLimitPerDay)
    };
}

function normalizeGroup(group) {
    const normalized = normalizePayload(group || {});
    return {
        id: Number(normalized.id || 0),
        groupName: String(normalized.groupName || ""),
        description: String(normalized.description || ""),
        creatorId: Number(normalized.creatorId || 0)
    };
}

function normalizeTodo(todo) {
    const normalized = normalizePayload(todo || {});
    return {
        id: Number(normalized.id || 0),
        title: String(normalized.title || ""),
        description: String(normalized.description || ""),
        remindTime: normalized.remindTime || "",
        createTime: normalized.createTime || "",
        status: String(normalized.status || "Pending"),
        priority: normalizePriorityCode(normalized.priority),
        userName: String(normalized.userName || ""),
        groupName: String(normalized.groupName || ""),
        groupId: normalized.groupId == null ? null : Number(normalized.groupId),
        isRepeated: !!normalized.isRepeated,
        repeatMode: String(normalized.repeatMode || "CustomInterval"),
        repeatInterval: Number(normalized.repeatInterval || 0),
        repeatWeekDays: Number(normalized.repeatWeekDays || 0),
        repeatMonthDay: Number(normalized.repeatMonthDay || 0),
        isRandomReminder: !!normalized.isRandomReminder,
        randomMinMinutes: Number(normalized.randomMinMinutes || 0),
        randomMaxMinutes: Number(normalized.randomMaxMinutes || 0),
        isWeatherReminder: !!normalized.isWeatherReminder,
        weatherLocation: String(normalized.weatherLocation || ""),
        weatherRainEnabled: !!normalized.weatherRainEnabled,
        weatherRainCheckInterval: Number(normalized.weatherRainCheckInterval || 0)
    };
}

function normalizeStickyNote(note) {
    const normalized = normalizePayload(note || {});
    return {
        id: String(normalized.id || ""),
        title: String(normalized.title || ""),
        contentHtml: String(normalized.contentHtml || ""),
        noteDate: normalized.noteDate || "",
        createdAt: normalized.createdAt || "",
        updatedAt: normalized.updatedAt || ""
    };
}

function normalizeAppForwardingSettings(value) {
    const normalized = normalizePayload(value || {});
    const selectedApplications = Array.isArray(normalized.selectedApplications)
        ? normalized.selectedApplications
            .map((item) => normalizePayload(item || {}))
            .filter((item) => item.packageName || item.appName)
            .map((item) => ({
                appName: String(item.appName || ""),
                packageName: String(item.packageName || "")
            }))
        : [];
    const selectedApplicationPackages = Array.isArray(normalized.selectedApplicationPackages)
        ? normalized.selectedApplicationPackages.map((item) => String(item || "").trim()).filter(Boolean)
        : selectedApplications.map((item) => item.packageName).filter(Boolean);
    return {
        enabled: !!normalized.enabled,
        autoDismissNotifications: !!normalized.autoDismissNotifications,
        onlyWhenLocked: !!normalized.onlyWhenLocked,
        onlyForwardSmsApplications: !!normalized.onlyForwardSmsApplications,
        forwardSelectedApplicationsOnly: !!normalized.forwardSelectedApplicationsOnly,
        selectedApplicationPackages,
        selectedApplications
    };
}

function normalizePlanPaymentState(value) {
    if (!value) {
        return null;
    }

    const normalized = normalizePayload(value || {});
    const planId = String(normalized.planId || normalized.id || "");
    const plan = SUBSCRIPTION_PLANS[planId];
    if (!plan) {
        return null;
    }

    return {
        ownerUserId: Number(normalized.ownerUserId || 0),
        planId,
        channelCode: String(normalized.channelCode || "alipay"),
        orderId: String(normalized.orderId || ""),
        externalOrderId: String(normalized.externalOrderId || ""),
        payUrl: String(normalized.payUrl || ""),
        payWay: String(normalized.payWay || ""),
        amount: Number(normalized.amount || plan.amount || 0),
        monthsToAdd: Number(normalized.monthsToAdd || plan.monthsToAdd || 0),
        content: String(normalized.content || plan.content || ""),
        createdAt: normalized.createdAt || "",
        statusText: String(normalized.statusText || ""),
        isPaid: !!normalized.isPaid,
        isClosed: !!normalized.isClosed
    };
}

function normalizeUserSettings(settings) {
    const normalized = normalizePayload(settings || {});
    return {
        id: Number(normalized.id || 0),
        userId: Number(normalized.userId || 0),
        defaultRemindInterval: Number(normalized.defaultRemindInterval || 0),
        enableEmailNotify: !!normalized.enableEmailNotify,
        enablePushNotify: !!normalized.enablePushNotify,
        notifySound: !!normalized.notifySound,
        appLight: !!normalized.appLight,
        theme: String(normalized.theme || ""),
        wxWebhook: String(normalized.wxWebhook || ""),
        language: String(normalized.language || "zh-CN"),
        notificationChannels: unwrapCollection(normalized.notificationChannels).map(normalizeChannelConfig)
    };
}

function normalizeRedemptionOption(option) {
    const normalized = normalizePayload(option || {});
    const days = Number(normalized.days || 0);
    return {
        days,
        costPoints: Number(normalized.costPoints || days || 0),
        title: String(normalized.title || `${days || 0} 天 Pro`),
        description: String(normalized.description || "")
    };
}

function normalizeRedemptionCodeAdmin(item) {
    const normalized = normalizePayload(item || {});
    return {
        id: Number(normalized.id || 0),
        code: String(normalized.code || ""),
        points: Number(normalized.points || 0),
        tag: String(normalized.tag || ""),
        description: String(normalized.description || ""),
        isUsed: !!normalized.isUsed,
        createdAt: normalized.createdAt || "",
        usedAt: normalized.usedAt || "",
        usedByUserName: String(normalized.usedByUserName || ""),
        createdByUserName: String(normalized.createdByUserName || "")
    };
}

function normalizeRedemptionSummary(summary) {
    const normalized = normalizePayload(summary || {});
    const user = normalizeUser(normalized.user || state.profile.info || state.currentUser || {});
    const inviteCode = String(normalized.inviteCode || user.inviteCode || "");
    const pointBalance = Number(normalized.pointBalance ?? user.proExchangePointBalance ?? 0);
    return {
        user: {
            ...user,
            inviteCode,
            proExchangePointBalance: pointBalance
        },
        inviteCode,
        pointBalance,
        invitedUserCount: Number(normalized.invitedUserCount || 0),
        usedCodeCount: Number(normalized.usedCodeCount || 0),
        redemptionOptions: unwrapCollection(normalized.redemptionOptions).map(normalizeRedemptionOption)
    };
}

function normalizeRedemptionAdminPage(page) {
    const normalized = normalizePayload(page || {});
    return {
        items: unwrapCollection(normalized.items).map(normalizeRedemptionCodeAdmin),
        totalCount: Number(normalized.totalCount || 0),
        completedCount: Number(normalized.completedCount || 0),
        pageIndex: Number(normalized.pageIndex || 1),
        pageSize: Number(normalized.pageSize || 20)
    };
}

function normalizeChannelConfig(channel) {
    const normalized = normalizePayload(channel || {});
    const settings = {};
    const rawSettings = normalized.settings && typeof normalized.settings === "object" && !Array.isArray(normalized.settings)
        ? normalized.settings
        : {};
    Object.keys(rawSettings).forEach((key) => {
        if (isDotNetMetadataKey(key)) {
            return;
        }
        const normalizedKey = String(key || "").trim();
        if (!normalizedKey) {
            return;
        }
        settings[normalizedKey] = String(rawSettings[key] ?? "");
    });
    return {
        id: String(normalized.id || createId()),
        type: String(normalized.type || "").trim().toLowerCase(),
        enabled: !!normalized.enabled,
        settings
    };
}

function getChannelDefinition(type) {
    const baseDefinition = CHANNEL_DEFINITIONS[type] || {
        description: "自定义通知渠道配置。",
        fields: []
    };
    const forwardingFields = [
        createChannelField("useForAppForwarding", "应用转发复用", "toggle", {
            defaultValue: "true",
            hint: "控制应用通知转发是否可以复用这个渠道。"
        }),
        createChannelField("useForSmsBroadcastForwarding", "短信广播转发复用", "toggle", {
            defaultValue: "true",
            hint: "控制短信广播转发是否可以复用这个渠道。"
        })
    ];
    const existingKeys = new Set(baseDefinition.fields.map((field) => field.key));
    return {
        ...baseDefinition,
        fields: baseDefinition.fields.concat(forwardingFields.filter((field) => !existingKeys.has(field.key)))
    };
}

function buildDefaultChannelSettings(type) {
    const definition = getChannelDefinition(type);
    const settings = {};
    definition.fields.forEach((field) => {
        if (field.defaultValue != null) {
            settings[field.key] = String(field.defaultValue);
        } else if (field.inputType === "toggle") {
            settings[field.key] = "false";
        } else if (field.inputType === "choice" && field.options.length) {
            settings[field.key] = String(field.options[0].value);
        } else {
            settings[field.key] = "";
        }
    });
    return settings;
}

function toToggleString(value) {
    return value === true || String(value).toLowerCase() === "true" ? "true" : "false";
}

function formatChannelFieldValue(field, value) {
    if (value == null || value === "") {
        return "";
    }

    if (field.inputType === "toggle") {
        return String(value).toLowerCase() === "true" ? "已启用" : "未启用";
    }

    if (field.inputType === "choice" && field.options.length) {
        return field.options.find((item) => String(item.value) === String(value))?.label || String(value);
    }

    if (field.inputType === "secret") {
        return "已配置";
    }

    return String(value);
}

function normalizeCommunityBootstrap(raw) {
    const normalized = normalizePayload(raw || {});
    normalized.categories = unwrapCollection(normalized.categories);
    normalized.posts = unwrapCollection(normalized.posts);
    normalized.management = normalized.management || {};
    normalized.management.categories = unwrapCollection(normalized.management.categories);
    normalized.management.posts = unwrapCollection(normalized.management.posts);
    normalized.management.users = unwrapCollection(normalized.management.users).map((item) => normalizePayload(item || {}));

    const profile = normalizePayload(normalized.profile || {});
    normalized.profile = {
        ...normalizeUser(profile),
        userId: Number(profile.userId || profile.id || 0),
        likeCount: Number(profile.likeCount || 0),
        commentCount: Number(profile.commentCount || 0),
        favoriteCount: Number(profile.favoriteCount || 0),
        postCount: Number(profile.postCount || 0),
        canCreatePost: profile.canCreatePost !== false
    };
    return normalized;
}

function getServerOrigin() {
    return DEFAULT_SERVER_ORIGIN.replace(/\/$/, "");
}

function getApiBaseUrl() {
    return `${getServerOrigin()}/api`;
}

function getHubUrl() {
    return `${getServerOrigin()}/hubs/reminder`;
}

function getAuthHeaderValue() {
    if (!state.authToken) {
        return "";
    }

    return /^Bearer /i.test(state.authToken) ? state.authToken : `Bearer ${state.authToken}`;
}

function getSignalRToken() {
    return String(state.authToken || "").replace(/^Bearer\s+/i, "");
}

let refreshTokenPromise = null;

async function tryRefreshAuthToken() {
    if (refreshTokenPromise) {
        return refreshTokenPromise;
    }

    const refreshToken = String(state.refreshToken || "").trim();
    if (!refreshToken) {
        return false;
    }

    refreshTokenPromise = (async () => {
        try {
            const response = await fetch(`${getApiBaseUrl()}/Auth/refresh`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ refreshToken })
            });

            const payload = await readJson(response);
            if (!response.ok) {
                return false;
            }

            const data = payload && Object.prototype.hasOwnProperty.call(payload, "success")
                ? payload.data
                : payload;
            const nextAccessToken = String(data?.token || "").trim();
            if (!nextAccessToken) {
                return false;
            }

            state.authToken = nextAccessToken;
            localStorage.setItem("authToken", state.authToken);

            const nextRefreshToken = String(data?.refreshToken || "").trim();
            if (nextRefreshToken) {
                state.refreshToken = nextRefreshToken;
                localStorage.setItem("refreshToken", state.refreshToken);
            }

            if (data?.user) {
                state.currentUser = normalizeUser(data.user);
                saveJson("currentUser", state.currentUser);
            }

            return true;
        } catch (error) {
            console.error("刷新 token 失败", error);
            return false;
        } finally {
            refreshTokenPromise = null;
        }
    })();

    return refreshTokenPromise;
}

async function readJson(response) {
    const text = await response.text();
    if (!text) {
        return null;
    }

    try {
        return normalizePayload(JSON.parse(text));
    } catch (error) {
        console.error("解析响应失败", error);
        return null;
    }
}

function extractErrorMessage(payload, fallback) {
    if (!payload) {
        return fallback;
    }

    if (typeof payload === "string") {
        return payload;
    }

    return payload.message || payload.title || payload.error || fallback;
}

function mapApiErrorMessage(status, message) {
    const text = String(message || "").trim();
    if (!text) {
        return status ? `请求失败：${status}` : "请求失败";
    }

    if (text.includes("普通用户待办事项上限为")) {
        return `免费版最多保留 ${QUOTA_DEFAULTS.pendingTodoLimit} 个待完成事项。请先完成或删除部分待办，或前往“订阅套餐”开通 Pro。`;
    }

    if (text.includes("普通用户最多只能加入或创建")) {
        return `免费版最多只能加入或创建 ${QUOTA_DEFAULTS.groupMembershipLimit} 个共享团队。请先退出部分团队，或前往“订阅套餐”开通 Pro。`;
    }

    if (text.includes("仅 Pro 用户可使用该接口")) {
        return "当前操作仅限 Pro 用户使用。可前往“订阅套餐”开通后继续。";
    }

    if (/Following notification channels require Pro:/i.test(text)) {
        const restrictedTypeNames = extractRestrictedChannelTypes(text).map(getChannelTypeDisplayName);
        return restrictedTypeNames.length
            ? `以下通知渠道仅限 Pro 用户使用：${restrictedTypeNames.join("、")}。`
            : "当前通知渠道仅限 Pro 用户使用。可前往“订阅套餐”开通后继续。";
    }

    if (text.includes("24小时内 API 请求次数已达上限")) {
        return `当前账号 24 小时内 API 请求已达 ${QUOTA_DEFAULTS.apiRequestLimitPer24Hours} 次上限，请稍后再试。`;
    }

    if (text.includes("发送上限已超今日免费用户发送限制")) {
        return `免费用户今日正常通知内容已达 ${QUOTA_DEFAULTS.freeNotificationContentLimitPerDay} 条上限，后续会自动降级为限制提示标题。`;
    }

    if (status === 429) {
        return "请求过于频繁，请稍后再试。";
    }

    return text;
}

function createApiError(status, payload, fallback) {
    const rawMessage = extractErrorMessage(payload, fallback || (status ? `请求失败：${status}` : "请求失败"));
    const error = new Error(mapApiErrorMessage(status, rawMessage));
    error.status = Number(status || 0);
    error.rawMessage = rawMessage;
    error.payload = payload || null;
    return error;
}

async function apiRequest(path, options = {}) {
    const { method = "GET", body, useAuth = true } = options;

    async function sendOnce() {
        const init = {
            method,
            headers: {
                Accept: "application/json"
            }
        };

        if (useAuth && getAuthHeaderValue()) {
            init.headers.Authorization = getAuthHeaderValue();
        }

        if (body instanceof FormData) {
            init.body = body;
        } else if (body != null) {
            init.body = JSON.stringify(body);
            init.headers["Content-Type"] = "application/json";
        }

        const url = path.startsWith("http") ? path : `${getApiBaseUrl()}/${String(path).replace(/^\/+/, "")}`;
        const response = await fetch(url, init);
        const payload = await readJson(response);
        return { response, payload };
    }

    let { response, payload } = await sendOnce();
    if (response.status === 401 && useAuth) {
        const refreshed = await tryRefreshAuthToken();
        if (refreshed) {
            ({ response, payload } = await sendOnce());
        } else {
            logout({ silent: true });
        }
    }

    if (!response.ok) {
        if (response.status === 401 && useAuth) {
            logout({ silent: true });
        }
        throw createApiError(response.status, payload, `请求失败：${response.status}`);
    }

    if (payload && typeof payload === "object" && Object.prototype.hasOwnProperty.call(payload, "success")) {
        if (payload.success === false) {
            throw createApiError(Number(payload.code || 0), payload, "请求失败");
        }
        return payload.data;
    }

    return payload;
}

function showNotification(message, type = "info") {
    const notification = qs("notification");
    if (!notification) {
        return;
    }

    notification.textContent = translateText(message);
    notification.className = `notification ${type} show`;
    clearTimeout(showNotification._timer);
    showNotification._timer = window.setTimeout(() => {
        notification.classList.remove("show");
    }, 3200);
}

function openModal(id) {
    const modal = qs(id);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(id) {
    const modal = qs(id);
    if (modal) {
        modal.classList.remove("show");
    }

    if (id === "communityDetailModal") {
        resetCommunityDetailState();
    }
}

function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = String(value ?? "");
    return div.innerHTML;
}

function isInteractiveElement(element) {
    return !!element?.closest("button, a, input, textarea, select, label, [contenteditable='true']");
}

function resetCommunityCommentInteractionState() {
    state.community.detail.editingCommentId = null;
    state.community.detail.editingCommentContent = "";
    state.community.detail.deletingCommentId = null;
}

function resetCommunityDetailState() {
    state.community.detail.currentPostId = null;
    resetCommunityCommentInteractionState();
}

function getActiveCommunityDetailPost() {
    const postId = Number(state.community.detail.currentPostId || 0);
    return postId ? getCommunityPostById(postId) : null;
}

function sanitizeHtml(rawHtml) {
    const container = document.createElement("div");
    container.innerHTML = rawHtml || "";
    container.querySelectorAll("script,style,iframe,object,embed").forEach((node) => node.remove());
    container.querySelectorAll("*").forEach((element) => {
        Array.from(element.attributes).forEach((attribute) => {
            if (attribute.name.toLowerCase().startsWith("on")) {
                element.removeAttribute(attribute.name);
            }
        });
    });
    return container.innerHTML;
}

function stripHtml(rawHtml) {
    const container = document.createElement("div");
    container.innerHTML = sanitizeHtml(rawHtml);
    return (container.textContent || "").replace(/\s+/g, " ").trim();
}

function truncate(text, size = 120) {
    const value = String(text || "");
    return value.length > size ? `${value.slice(0, size - 1)}…` : value;
}

function formatDate(value) {
    if (!value) {
        return "-";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return String(value);
    }

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateTime(value) {
    if (!value) {
        return "-";
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return String(value);
    }

    return `${formatDate(date)} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatDateTimeLocalValue(value) {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatDuration(seconds) {
    const total = Math.max(0, Number(seconds || 0));
    const minutes = Math.floor(total / 60);
    const remainSeconds = total % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainSeconds).padStart(2, "0")}`;
}

function renderEmpty(message) {
    return `<div class="empty-state">${escapeHtml(translateText(message))}</div>`;
}

function getCurrentUserProfile() {
    return state.profile.info || normalizeUser(state.currentUser || {});
}

function getQuotaSummary() {
    const user = getCurrentUserProfile();
    const quota = state.quota.summary || {};
    return {
        isPro: !!(quota.isPro || user.isPro),
        pendingTodoCount: Number(quota.pendingTodoCount ?? 0),
        pendingTodoLimit: Number(quota.pendingTodoLimit ?? QUOTA_DEFAULTS.pendingTodoLimit),
        groupMembershipCount: Number(quota.groupMembershipCount ?? 0),
        groupMembershipLimit: Number(quota.groupMembershipLimit ?? QUOTA_DEFAULTS.groupMembershipLimit),
        apiRequestLimitPer24Hours: Number(quota.apiRequestLimitPer24Hours ?? QUOTA_DEFAULTS.apiRequestLimitPer24Hours),
        notificationSendLimitPerMinute: Number(quota.notificationSendLimitPerMinute ?? QUOTA_DEFAULTS.notificationSendLimitPerMinute),
        freeNotificationContentLimitPerDay: Number(quota.freeNotificationContentLimitPerDay ?? QUOTA_DEFAULTS.freeNotificationContentLimitPerDay)
    };
}

function getCurrentUserName() {
    const user = getCurrentUserProfile();
    return user.displayName || user.userName || "未登录用户";
}

function setHeaderByModule(module) {
    const meta = MODULE_META[module] || MODULE_META.todo;
    qs("pageTitle").textContent = meta.title;
    qs("pageSubtitle").textContent = meta.subtitle;
}

function updateHeaderUserBadges() {
    const user = getCurrentUserProfile();
    qs("currentUserLabel").textContent = getCurrentUserName();
    qs("topbarRoleBadge").textContent = user.isAdmin ? "管理员" : "普通用户";
    qs("topbarPlanBadge").textContent = user.isPro ? "Pro 会员" : "未订阅";
}

function setAuthFormsVisible(tab) {
    document.querySelectorAll(".auth-tab").forEach((button) => {
        button.classList.toggle("active", button.dataset.authTab === tab);
    });
    qs("loginForm").classList.toggle("hidden", tab !== "login");
    qs("registerForm").classList.toggle("hidden", tab !== "register");
}

function showLoginInterface() {
    qs("loginContainer").classList.remove("hidden");
    qs("mainContainer").classList.add("hidden");
    setMobileNavigationOpen(false);
}

function showMainInterface() {
    qs("loginContainer").classList.add("hidden");
    qs("mainContainer").classList.remove("hidden");
    updateHeaderUserBadges();
    syncNavigationLayout();
}

function isDrawerNavigationLayout() {
    return window.matchMedia(MOBILE_NAV_MEDIA_QUERY).matches;
}

function setMobileNavigationOpen(open) {
    const mainContainer = qs("mainContainer");
    const isOpen = !!open && !mainContainer.classList.contains("hidden") && isDrawerNavigationLayout();
    state.ui.mobileNavOpen = isOpen;
    mainContainer.classList.toggle("drawer-open", isOpen);
    document.body.classList.toggle("drawer-active", isOpen);
    const toggleButton = qs("mobileNavToggle");
    if (toggleButton) {
        toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
}

function toggleMobileNavigation() {
    setMobileNavigationOpen(!state.ui.mobileNavOpen);
}

function syncNavigationLayout() {
    if (!isDrawerNavigationLayout()) {
        setMobileNavigationOpen(false);
        return;
    }

    if (qs("mainContainer").classList.contains("hidden")) {
        setMobileNavigationOpen(false);
    }
}

function handleGlobalKeydown(event) {
    if (event.key === "Escape" && state.ui.mobileNavOpen) {
        setMobileNavigationOpen(false);
    }
}

function initializeRepeatMonthDayOptions() {
    const select = qs("todoRepeatMonthDay");
    if (!select || select.options.length > 0) {
        return;
    }
    for (let day = 1; day <= 31; day += 1) {
        const option = document.createElement("option");
        option.value = String(day);
        option.textContent = `${day} 日`;
        select.appendChild(option);
    }
}

function applyRichCommand(targetId, command, value) {
    const editor = qs(targetId);
    if (!editor) {
        return;
    }
    editor.focus();
    document.execCommand(command, false, value);
}

function debounce(fn, wait) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = window.setTimeout(() => fn(...args), wait);
    };
}

async function loadQuotaSummary(silent = false) {
    try {
        const payload = await apiRequest("User/quota-summary");
        state.quota.summary = normalizeQuotaSummary(payload || {});
        state.quota.loaded = true;
        state.quota.lastLoadedAt = Date.now();
        return state.quota.summary;
    } catch (error) {
        if (!silent) {
            showNotification(error.message || "加载额度信息失败", "error");
        }
        return state.quota.summary;
    }
}

function invalidateQuotaSummary() {
    state.quota.summary = null;
    state.quota.loaded = false;
    state.quota.lastLoadedAt = 0;
}

async function ensureQuotaSummary(force = false) {
    if (!state.authToken) {
        return getQuotaSummary();
    }

    const isFresh = state.quota.loaded && (Date.now() - state.quota.lastLoadedAt) < 30000;
    if (!force && isFresh) {
        return getQuotaSummary();
    }

    return (await loadQuotaSummary(true)) || getQuotaSummary();
}

async function ensureTodoCreationAllowed() {
    const quota = await ensureQuotaSummary();
    if (quota.isPro) {
        return true;
    }

    if (quota.pendingTodoCount >= quota.pendingTodoLimit) {
        showNotification(
            `当前已使用 ${quota.pendingTodoCount} / ${quota.pendingTodoLimit} 个待完成事项。请先完成或删除部分待办，或前往“订阅套餐”开通 Pro。`,
            "warning"
        );
        return false;
    }

    return true;
}

async function ensureGroupMembershipAllowed(actionLabel = "继续操作") {
    const quota = await ensureQuotaSummary();
    if (quota.isPro) {
        return true;
    }

    if (quota.groupMembershipCount >= quota.groupMembershipLimit) {
        showNotification(
            `当前已使用 ${quota.groupMembershipCount} / ${quota.groupMembershipLimit} 个共享团队名额，免费用户暂时无法${actionLabel}。请先退出部分团队，或前往“订阅套餐”开通 Pro。`,
            "warning"
        );
        return false;
    }

    return true;
}
// AUTH_AND_COMMON
async function handleLogin(event) {
    event.preventDefault();
    try {
        const result = await apiRequest("Auth/login", {
            method: "POST",
            useAuth: false,
            body: {
                userName: qs("loginUsername").value.trim(),
                password: qs("loginPassword").value
            }
        });

        state.authToken = result?.token || "";
        state.refreshToken = result?.refreshToken || "";
        state.currentUser = normalizeUser(result?.user || {});
        localStorage.setItem("authToken", state.authToken);
        localStorage.setItem("refreshToken", state.refreshToken);
        saveJson("currentUser", state.currentUser);

        showMainInterface();
        await initializeSignalR();
        await loadInitialData();
        showNotification("登录成功", "success");
    } catch (error) {
        showNotification(error.message || "登录失败", "error");
    }
}

let registerCodeCooldownTimer = null;

function setRegisterCodeButton(text, disabled) {
    const button = qs("sendRegisterCodeBtn");
    button.textContent = text;
    button.disabled = disabled;
}

function startRegisterCodeCooldown(seconds = 60) {
    let remainSeconds = seconds;
    clearInterval(registerCodeCooldownTimer);
    setRegisterCodeButton(`${remainSeconds}s 后重试`, true);
    registerCodeCooldownTimer = window.setInterval(() => {
        remainSeconds -= 1;
        if (remainSeconds <= 0) {
            clearInterval(registerCodeCooldownTimer);
            registerCodeCooldownTimer = null;
            setRegisterCodeButton("获取验证码", false);
            return;
        }

        setRegisterCodeButton(`${remainSeconds}s 后重试`, true);
    }, 1000);
}

function getRegisterRequestLanguage() {
    const browserLanguage = state.ui.language || (Array.isArray(navigator.languages) && navigator.languages.length > 0
        ? navigator.languages[0]
        : (navigator.language || document.documentElement.lang || "zh-CN"));
    return /^en/i.test(String(browserLanguage || "").trim()) ? "en-US" : "zh-CN";
}

async function handleSendRegisterCode() {
    const email = qs("registerEmail").value.trim();
    if (!email) {
        showNotification("请先输入邮箱", "warning");
        qs("registerEmail").focus();
        return;
    }

    try {
        setRegisterCodeButton("发送中...", true);
        await apiRequest("Auth/send-register-code", {
            method: "POST",
            useAuth: false,
            body: {
                email,
                language: getRegisterRequestLanguage()
            }
        });
        showNotification("验证码已发送，请查收邮箱", "success");
        startRegisterCodeCooldown(60);
    } catch (error) {
        if (error.status === 429) {
            startRegisterCodeCooldown(60);
        } else {
            setRegisterCodeButton("获取验证码", false);
        }
        showNotification(error.message || "验证码发送失败", "error");
    }
}

async function handleRegister(event) {
    event.preventDefault();
    try {
        const email = qs("registerEmail").value.trim();
        const verificationCode = qs("registerCode").value.trim();
        const password = qs("registerPassword").value;
        const invitationCode = qs("registerInvitationCode").value.trim();
        if (!email) {
            showNotification("请填写邮箱", "warning");
            qs("registerEmail").focus();
            return;
        }
        if (!verificationCode) {
            showNotification("请填写验证码", "warning");
            qs("registerCode").focus();
            return;
        }
        if (!password) {
            showNotification("请填写密码", "warning");
            qs("registerPassword").focus();
            return;
        }
        if (invitationCode && !/^\d{6}$/.test(invitationCode)) {
            showNotification("邀请码必须是 6 位数字", "warning");
            qs("registerInvitationCode").focus();
            return;
        }

        await apiRequest("Auth/register", {
            method: "POST",
            useAuth: false,
            body: {
                userName: qs("registerUsername").value.trim() || null,
                email,
                verificationCode,
                password,
                invitationCode: invitationCode || null
            }
        });
        showNotification("注册成功，请登录", "success");
        setAuthFormsVisible("login");
        qs("loginUsername").value = email;
    } catch (error) {
        showNotification(error.message || "注册失败", "error");
    }
}

function logout(options = {}) {
    const { silent = false } = options;
    if (state.connection) {
        state.connection.stop();
    }

    state.authToken = "";
    state.refreshToken = "";
    state.currentUser = null;
    state.profile.info = null;
    state.profile.settings = null;
    state.redemption.summary = null;
    state.redemption.adminCodes = [];
    state.redemption.adminFilter = "all";
    state.redemption.adminKeyword = "";
    state.redemption.adminTag = "";
    state.redemption.adminTags = [];
    state.redemption.lastGeneratedCodes = [];
    invalidateQuotaSummary();
    clearCurrentPaymentState();
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("currentUser");
    showLoginInterface();
    if (!silent) {
        showNotification("已退出登录", "info");
    }
}

async function initializeSignalR() {
    if (!window.signalR || !state.authToken) {
        return;
    }

    try {
        state.connection = new signalR.HubConnectionBuilder()
            .withUrl(getHubUrl(), {
                accessTokenFactory: () => getSignalRToken()
            })
            .withAutomaticReconnect()
            .build();

        state.connection.on("ReceiveReminder", (payload) => showReminderPopup(payload));
        state.connection.on("ReceiveGroupReminder", (payload) => showReminderPopup(payload));
        state.connection.onreconnecting(() => updateConnectionStatus("disconnected", "重连中"));
        state.connection.onreconnected(async () => {
            updateConnectionStatus("connected", "已连接");
            await syncAllSignalRGroups();
        });
        state.connection.onclose(() => updateConnectionStatus("disconnected", "连接断开"));

        await state.connection.start();
        updateConnectionStatus("connected", "已连接");
        await syncAllSignalRGroups();
    } catch (error) {
        console.error("SignalR 初始化失败", error);
        updateConnectionStatus("disconnected", "连接失败");
    }
}

function updateConnectionStatus(status, text) {
    const element = qs("connectionStatus");
    if (!element) {
        return;
    }
    element.className = `connection-status ${status}`;
    element.innerHTML = `<i class="fas fa-circle"></i><span>${escapeHtml(text)}</span>`;
}

function showReminderPopup(payload) {
    state.currentReminderTodo = normalizePayload(payload || {});
    qs("reminderTitle").textContent = state.currentReminderTodo.title || "提醒";
    qs("reminderDescription").textContent = state.currentReminderTodo.description || "";
    qs("reminderPopup").classList.remove("hidden");
    showNotification(`提醒：${state.currentReminderTodo.title || "任务到点"}`, "warning");
}

async function markReminderComplete() {
    if (!state.currentReminderTodo?.todoId) {
        dismissReminder();
        return;
    }
    await completeTodo(Number(state.currentReminderTodo.todoId));
    dismissReminder();
}

async function snoozeReminder() {
    if (!state.currentReminderTodo?.todoId) {
        dismissReminder();
        return;
    }

    try {
        const remindTime = new Date(Date.now() + 10 * 60 * 1000);
        await apiRequest(`Todo/${state.currentReminderTodo.todoId}`, {
            method: "PUT",
            body: { remindTime: remindTime.toISOString() }
        });
        showNotification("已延后 10 分钟提醒", "success");
        dismissReminder();
        await refreshTodoModule();
    } catch (error) {
        showNotification(error.message || "延后提醒失败", "error");
    }
}

function dismissReminder() {
    qs("reminderPopup").classList.add("hidden");
    if (state.connection && state.currentReminderTodo?.todoId) {
        state.connection.invoke("MarkReminderAsRead", Number(state.currentReminderTodo.todoId), 0).catch(() => {});
    }
    state.currentReminderTodo = null;
}

async function syncAllSignalRGroups() {
    if (!state.connection || state.connection.state !== "Connected") {
        return;
    }

    for (const group of state.groups.items) {
        try {
            await state.connection.invoke("JoinGroup", `Group_${group.id}`);
        } catch (error) {
            console.error("加入 SignalR 组失败", error);
        }
    }
}

async function loadInitialData() {
    await Promise.all([
        loadProfileInfo(),
        loadUserSettings(),
        loadUserGroups()
    ]);
    // Clear any stored module and always start with todo
    localStorage.removeItem("activeModule");
    await setActiveModule("todo");
}

async function setActiveModule(module) {
    state.activeModule = module in MODULE_META ? module : "todo";
    localStorage.setItem("activeModule", state.activeModule);
    document.querySelectorAll(".nav-item").forEach((button) => {
        button.classList.toggle("active", button.dataset.module === state.activeModule);
    });
    document.querySelectorAll(".module-section").forEach((section) => {
        section.classList.toggle("active", section.id === `section-${state.activeModule}`);
    });
    setHeaderByModule(state.activeModule);
    await ensureModuleLoaded(state.activeModule);
    if (isDrawerNavigationLayout()) {
        setMobileNavigationOpen(false);
    }
}

async function ensureModuleLoaded(module) {
    switch (module) {
        case "todo":
            await refreshTodoModule();
            break;
        case "sticky":
            await loadStickyNotes();
            break;
        case "pomodoro":
            renderPomodoro();
            break;
        case "groups":
            renderGroups();
            break;
        case "community":
            await loadCommunityBootstrap();
            break;
        case "profile":
            await Promise.all([loadProfileInfo(), loadUserSettings()]);
            renderProfile();
            break;
        case "redemption":
            await loadRedemptionCenter();
            break;
        case "plans":
            await loadProfileInfo();
            renderPlans();
            break;
        case "weather":
            renderWeather();
            break;
        default:
            break;
    }
}

// BINDINGS
function bindGlobalEvents() {
    document.querySelectorAll(".auth-tab").forEach((button) => {
        button.addEventListener("click", () => setAuthFormsVisible(button.dataset.authTab));
    });

    document.querySelectorAll(".nav-item").forEach((button) => {
        button.addEventListener("click", () => setActiveModule(button.dataset.module));
    });

    qs("mobileNavToggle").addEventListener("click", toggleMobileNavigation);
    qs("mobileNavClose").addEventListener("click", () => setMobileNavigationOpen(false));
    qs("mobileNavOverlay").addEventListener("click", () => setMobileNavigationOpen(false));
    window.addEventListener("resize", syncNavigationLayout);
    document.addEventListener("keydown", handleGlobalKeydown);

    document.querySelectorAll("[data-close-modal]").forEach((button) => {
        button.addEventListener("click", () => closeModal(button.dataset.closeModal));
    });

    document.querySelectorAll(".modal").forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    document.querySelectorAll(".editor-toolbar").forEach((toolbar) => {
        const targetId = toolbar.dataset.editorTarget;
        toolbar.querySelectorAll("[data-editor-command]").forEach((button) => {
            button.addEventListener("click", () => {
                applyRichCommand(targetId, button.dataset.editorCommand, button.dataset.editorValue || null);
            });
        });
    });

    qs("loginForm").addEventListener("submit", handleLogin);
    qs("registerForm").addEventListener("submit", handleRegister);
    qs("sendRegisterCodeBtn").addEventListener("click", handleSendRegisterCode);
    qs("registerInvitationCode").addEventListener("input", (event) => {
        event.target.value = String(event.target.value || "").replace(/\D+/g, "").slice(0, 6);
    });
    qs("logoutBtn").addEventListener("click", logout);
    qs("markReminderCompleteBtn").addEventListener("click", markReminderComplete);
    qs("snoozeReminderBtn").addEventListener("click", snoozeReminder);
    qs("dismissReminderBtn").addEventListener("click", dismissReminder);

    bindTodoEvents();
    bindStickyEvents();
    bindPomodoroEvents();
    bindGroupEvents();
    bindCommunityEvents();
    bindProfileEvents();
    bindRedemptionEvents();
    bindPlanEvents();
    bindWeatherEvents();
}

// MODULES
function bindTodoEvents() {
    document.querySelectorAll("[data-todo-scope]").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelectorAll("[data-todo-scope]").forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            state.todo.filters.scope = button.dataset.todoScope;
            if (state.todo.filters.scope === "Personal") {
                state.todo.filters.groupId = "";
                qs("todoGroupFilter").value = "";
            }
            state.todo.currentPage = 1;
            refreshTodoModule();
        });
    });

    qs("todoSearchInput").addEventListener("input", debounce(() => {
        state.todo.filters.keyword = qs("todoSearchInput").value.trim();
        state.todo.currentPage = 1;
        refreshTodoModule();
    }, 300));
    qs("todoStatusFilter").addEventListener("change", () => {
        state.todo.filters.status = qs("todoStatusFilter").value;
        state.todo.currentPage = 1;
        refreshTodoModule();
    });
    qs("todoPriorityFilter").addEventListener("change", () => {
        state.todo.filters.priority = qs("todoPriorityFilter").value;
        state.todo.currentPage = 1;
        refreshTodoModule();
    });
    qs("todoGroupFilter").addEventListener("change", () => {
        state.todo.filters.groupId = qs("todoGroupFilter").value;
        if (state.todo.filters.groupId) {
            state.todo.filters.scope = "Team";
            document.querySelectorAll("[data-todo-scope]").forEach((item) => {
                item.classList.toggle("active", item.dataset.todoScope === "Team");
            });
        }
        state.todo.currentPage = 1;
        refreshTodoModule();
    });
    qs("addTodoBtn").addEventListener("click", async () => {
        if (await ensureTodoCreationAllowed()) {
            openTodoModal("standard");
        }
    });
    qs("addWeatherTodoBtn").addEventListener("click", async () => {
        if (await ensureTodoCreationAllowed()) {
            openTodoModal("weather");
        }
    });
    qs("refreshTodoBtn").addEventListener("click", refreshTodoModule);
    document.querySelectorAll("[data-todo-view]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.todoView;
            state.todo.currentView = view;
            renderTodoViews();
        });
    });
    qs("todoPrevBtn").addEventListener("click", () => changeTodoPage(-1));
    qs("todoNextBtn").addEventListener("click", () => changeTodoPage(1));
    qs("calendarPrevMonthBtn").addEventListener("click", () => {
        state.todo.calendarMonth.setMonth(state.todo.calendarMonth.getMonth() - 1);
        loadTodoCalendar();
    });
    qs("calendarNextMonthBtn").addEventListener("click", () => {
        state.todo.calendarMonth.setMonth(state.todo.calendarMonth.getMonth() + 1);
        loadTodoCalendar();
    });
    qs("todoForm").addEventListener("submit", handleSaveTodo);
    qs("todoIsRepeated").addEventListener("change", toggleRepeatOptions);
    qs("todoRepeatMode").addEventListener("change", toggleRepeatOptions);
    qs("todoRandomReminder").addEventListener("change", toggleRepeatOptions);
    qs("todoRemindTime").addEventListener("change", syncRepeatDateDefaults);
    qs("todoWeatherRainEnabled").addEventListener("change", updateTodoModeSections);
    [
        "repeatMonday",
        "repeatTuesday",
        "repeatWednesday",
        "repeatThursday",
        "repeatFriday",
        "repeatSaturday",
        "repeatSunday"
    ].forEach((id) => {
        qs(id).addEventListener("change", alignRepeatTimeToWeekDays);
    });
}

function buildTodoQuery(includePage = true) {
    const params = new URLSearchParams();
    if (includePage) {
        params.set("pageIndex", String(state.todo.currentPage));
        params.set("pageSize", "20");
    }
    if (state.todo.filters.keyword) params.set("keyword", state.todo.filters.keyword);
    if (state.todo.filters.status) params.set("status", state.todo.filters.status);
    if (state.todo.filters.priority) params.set("priority", state.todo.filters.priority);

    if (state.todo.filters.scope === "All") {
        params.set("groupId", state.todo.filters.groupId || "-1");
    } else if (state.todo.filters.scope === "Team") {
        params.set("groupId", state.todo.filters.groupId || "0");
    } else if (state.todo.filters.groupId) {
        params.set("groupId", state.todo.filters.groupId);
    }
    return params;
}

async function refreshTodoModule() {
    await Promise.all([loadTodos(), loadTodoCalendar()]);
    if (state.todo.selectedDate) {
        await loadTodoDayDetail(state.todo.selectedDate);
    }
}

async function loadTodos() {
    try {
        const payload = await apiRequest(`Todo?${buildTodoQuery(true).toString()}`);
        state.todo.items = unwrapCollection(payload?.items).map(normalizeTodo);
        state.todo.currentPage = Number(payload?.pageIndex || 1);
        state.todo.totalPages = Math.max(1, Number(payload?.totalPages || 1));
        state.todo.totalCount = Number(payload?.totalCount || 0);
        state.todo.completedCount = Number(payload?.completedCount || 0);
        renderTodos();
    } catch (error) {
        qs("todoList").innerHTML = renderEmpty(error.message || "加载待办失败");
        showNotification(error.message || "加载待办失败", "error");
    }
}

function renderTodoViews() {
    const view = state.todo.currentView || "list";
    document.querySelectorAll("[data-todo-view]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.todoView === view);
    });
    qs("todoViewList").classList.toggle("active", view === "list");
    qs("todoViewCalendar").classList.toggle("active", view === "calendar");
}

function renderTodoTags(todo) {
    const detailTags = [];
    detailTags.push(`<span class="tag priority-${todo.priority.toLowerCase()}">${escapeHtml(getPriorityLabel(todo.priority))}</span>`);
    detailTags.push(`<span class="tag ${todo.status === "Completed" ? "success" : ""}">${escapeHtml(todo.status === "Completed" ? "已完成" : "待完成")}</span>`);
    if (todo.groupName) detailTags.push(`<span class="tag">${escapeHtml(todo.groupName)}</span>`);
    if (todo.isRepeated) detailTags.push(`<span class="tag">循环</span>`);
    if (todo.isWeatherReminder) detailTags.push(`<span class="tag">天气提醒</span>`);
    return detailTags.join("");
}

function renderTodoActionButtons(todo) {
    return `
        <div class="action-row todo-item-actions">
            ${todo.status === "Pending" ? `<button type="button" class="btn btn-primary" onclick="completeTodo(${todo.id})">完成</button>` : ""}
            <button type="button" class="btn btn-secondary" onclick="editTodo(${todo.id})">编辑</button>
            <button type="button" class="btn btn-ghost" onclick="deleteTodo(${todo.id})">删除</button>
        </div>
    `;
}

function renderTodos() {
    renderTodoViews();
    qs("totalTodos").textContent = String(state.todo.totalCount);
    qs("completedTodos").textContent = String(state.todo.completedCount);
    qs("pendingTodos").textContent = String(Math.max(0, state.todo.totalCount - state.todo.completedCount));
    qs("todoPageInfo").textContent = `第 ${state.todo.currentPage} / ${state.todo.totalPages} 页`;
    qs("todoPrevBtn").disabled = state.todo.currentPage <= 1;
    qs("todoNextBtn").disabled = state.todo.currentPage >= state.todo.totalPages;

    if (!state.todo.items.length) {
        qs("todoList").innerHTML = renderEmpty("暂无待办事项");
        return;
    }

    qs("todoList").innerHTML = state.todo.items.map((todo) => {
        return `
            <article class="todo-item">
                <div class="todo-item-head">
                    <div class="todo-item-body">
                        <h3>${escapeHtml(todo.title)}</h3>
                        <div class="meta-row">
                            <span>提醒：${escapeHtml(formatDateTime(todo.remindTime))}</span>
                            <span>创建：${escapeHtml(formatDateTime(todo.createTime))}</span>
                            <span>创建者：${escapeHtml(todo.userName || getCurrentUserName())}</span>
                        </div>
                    </div>
                    ${renderTodoActionButtons(todo)}
                </div>
                <div class="tag-row">${renderTodoTags(todo)}</div>
                ${todo.description ? `<p>${escapeHtml(todo.description)}</p>` : ""}
            </article>
        `;
    }).join("");
}

async function loadTodoCalendar() {
    try {
        const monthStart = startOfMonth(state.todo.calendarMonth);
        const monthEnd = new Date(monthStart);
        monthEnd.setMonth(monthEnd.getMonth() + 1);
        monthEnd.setDate(0);
        const params = buildTodoQuery(false);
        params.set("startDate", monthStart.toISOString());
        params.set("endDate", monthEnd.toISOString());
        const payload = await apiRequest(`Todo/calendar-summary?${params.toString()}`);
        renderTodoCalendar(unwrapCollection(payload?.days));
        qs("calendarMonthLabel").textContent = `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, "0")}`;
        const today = formatDate(new Date());
        if (!state.todo.selectedDate && today.startsWith(`${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, "0")}`)) {
            state.todo.selectedDate = today;
            await loadTodoDayDetail(today);
        }
    } catch (error) {
        qs("todoCalendarGrid").innerHTML = renderEmpty(error.message || "加载月度总览失败");
    }
}

function renderTodoCalendar(days) {
    const monthStart = startOfMonth(state.todo.calendarMonth);
    const firstWeekday = (monthStart.getDay() + 6) % 7;
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
    const summaryMap = new Map(days.map((item) => [formatDate(item.date), normalizePayload(item)]));
    const cells = [];

    for (let i = 0; i < firstWeekday; i += 1) {
        cells.push(`<div class="calendar-day muted"></div>`);
    }

    for (let day = 1; day <= monthEnd.getDate(); day += 1) {
        const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
        const key = formatDate(date);
        const summary = summaryMap.get(key) || {};
        const active = state.todo.selectedDate === key ? "active" : "";
        cells.push(`
            <button type="button" class="calendar-day ${active}" onclick="selectCalendarDate('${key}')">
                <strong>${day}</strong>
                <small>总数 ${Number(summary.totalCount || 0)}</small>
                <small>待完成 ${Number(summary.pendingCount || 0)}</small>
                <small>${summary.hasOverdue ? "含逾期" : "无逾期"}</small>
            </button>
        `);
    }

    qs("todoCalendarGrid").innerHTML = cells.join("");
}

async function selectCalendarDate(dateText) {
    state.todo.selectedDate = dateText;
    qs("todoDayDetailTitle").textContent = dateText;
    await loadTodoDayDetail(dateText);
    await loadTodoCalendar();
}

async function loadTodoDayDetail(dateText) {
    try {
        const params = buildTodoQuery(false);
        params.set("date", dateText);
        const payload = await apiRequest(`Todo/day-detail?${params.toString()}`);
        state.todo.dayDetail = unwrapCollection(payload?.todos || payload?.items || []);
        renderTodoDayDetail();
    } catch (error) {
        qs("todoDayDetail").innerHTML = renderEmpty(error.message || "加载当日详情失败");
    }
}

function renderTodoDayDetail() {
    if (!state.todo.dayDetail.length) {
        qs("todoDayDetail").innerHTML = renderEmpty("当天暂无任务");
        return;
    }

    qs("todoDayDetail").innerHTML = state.todo.dayDetail.map((item) => {
        const todo = normalizeTodo(item);
        return `
            <article class="todo-item">
                <div class="todo-item-head">
                    <div class="todo-item-body">
                        <strong class="todo-item-title">${escapeHtml(todo.title)}</strong>
                        <div class="meta-row">
                            <span>提醒：${escapeHtml(formatDateTime(todo.remindTime))}</span>
                            ${todo.createTime ? `<span>创建：${escapeHtml(formatDateTime(todo.createTime))}</span>` : ""}
                            <span>创建者：${escapeHtml(todo.userName || getCurrentUserName())}</span>
                        </div>
                        <div class="tag-row">${renderTodoTags(todo)}</div>
                        ${todo.description ? `<p>${escapeHtml(todo.description)}</p>` : ""}
                    </div>
                    ${renderTodoActionButtons(todo)}
                </div>
            </article>
        `;
    }).join("");
}

function changeTodoPage(step) {
    const nextPage = state.todo.currentPage + step;
    if (nextPage < 1 || nextPage > state.todo.totalPages) {
        return;
    }
    state.todo.currentPage = nextPage;
    loadTodos();
}

function openTodoModal(mode, todo) {
    qs("todoForm").reset();
    qs("todoId").value = todo?.id || "";
    qs("todoMode").value = mode;
    qs("todoModalTitle").textContent = mode === "weather" ? (todo ? "编辑天气提醒" : "新增天气提醒") : (todo ? "编辑待办" : "新增待办");
    qs("todoTitle").value = todo?.title || (mode === "weather" ? getLocalizedWeatherTodoTitle() : "");
    qs("todoDescription").value = todo?.description || "";
    qs("todoRemindTime").value = formatDateTimeLocalValue(todo?.remindTime || new Date(Date.now() + 2 * 60 * 60 * 1000));
    qs("todoPriority").value = todo?.priority === "High" ? "3" : todo?.priority === "Low" ? "1" : "2";
    qs("todoGroup").value = todo?.groupId || "";
    qs("todoIsRepeated").checked = !!todo?.isRepeated;
    qs("todoRepeatMode").value = todo?.repeatMode || "CustomInterval";
    qs("todoRepeatInterval").value = todo?.repeatInterval || 60;
    qs("todoRandomReminder").checked = !!todo?.isRandomReminder;
    qs("todoRandomMinMinutes").value = todo?.randomMinMinutes || 0;
    qs("todoRandomMaxMinutes").value = todo?.randomMaxMinutes || 60;
    qs("todoRepeatMonthDay").value = String(todo?.repeatMonthDay || new Date().getDate());
    qs("todoWeatherLocation").value = todo?.weatherLocation || state.weather.location || state.weather.lastQuery || qs("weatherCityInput").value.trim() || qs("weatherAdcodeInput").value.trim();
    qs("todoWeatherRainEnabled").checked = !!todo?.weatherRainEnabled;
    qs("todoWeatherRainCheckInterval").value = todo?.weatherRainCheckInterval || 120;
    setRepeatWeekDaysMask(todo?.repeatWeekDays || 0);
    updateTodoModeSections();
    openModal("todoModal");
}

async function editTodo(id) {
    try {
        const payload = await apiRequest(`Todo/${id}`);
        openTodoModal(payload?.isWeatherReminder ? "weather" : "standard", normalizeTodo(payload));
    } catch (error) {
        showNotification(error.message || "加载待办详情失败", "error");
    }
}

async function handleSaveTodo(event) {
    event.preventDefault();
    const id = qs("todoId").value;
    const weatherMode = qs("todoMode").value === "weather";
    const isRepeated = weatherMode ? true : qs("todoIsRepeated").checked;
    const repeatMode = weatherMode ? "Daily" : qs("todoRepeatMode").value;
    const useRandomReminder = repeatMode === "CustomInterval" && qs("todoRandomReminder").checked;

    const body = {
        title: weatherMode ? getLocalizedWeatherTodoTitle() : qs("todoTitle").value.trim(),
        description: weatherMode ? null : (qs("todoDescription").value.trim() || null),
        remindTime: qs("todoRemindTime").value || null,
        groupId: weatherMode ? null : (qs("todoGroup").value || null),
        priority: weatherMode ? 2 : Number(qs("todoPriority").value),
        isRepeated,
        repeatMode,
        repeatInterval: repeatMode === "CustomInterval" ? Number(qs("todoRepeatInterval").value || 0) : (repeatMode === "Daily" ? 1440 : 0),
        repeatWeekDays: repeatMode === "Weekly" ? getRepeatWeekDaysMask() : 0,
        repeatMonthDay: repeatMode === "Monthly" ? Number(qs("todoRepeatMonthDay").value || 0) : 0,
        isRandomReminder: useRandomReminder,
        randomMinMinutes: useRandomReminder ? Number(qs("todoRandomMinMinutes").value || 0) : 0,
        randomMaxMinutes: useRandomReminder ? Number(qs("todoRandomMaxMinutes").value || 0) : 0,
        isWeatherReminder: weatherMode,
        weatherLocation: weatherMode ? qs("todoWeatherLocation").value.trim() : null,
        weatherRainEnabled: weatherMode ? qs("todoWeatherRainEnabled").checked : false,
        weatherRainCheckInterval: weatherMode && qs("todoWeatherRainEnabled").checked
            ? Number(qs("todoWeatherRainCheckInterval").value || 120)
            : 0
    };

    if (weatherMode && !body.weatherLocation) {
        showNotification("请输入天气提醒位置", "warning");
        return;
    }

    if (!id && !(await ensureTodoCreationAllowed())) {
        return;
    }

    try {
        await apiRequest(id ? `Todo/${id}` : "Todo", {
            method: id ? "PUT" : "POST",
            body
        });
        closeModal("todoModal");
        showNotification(id ? "待办已更新" : "待办已创建", "success");
        invalidateQuotaSummary();
        await refreshTodoModule();
    } catch (error) {
        showNotification(error.message || "保存待办失败", "error");
    }
}

async function completeTodo(id) {
    try {
        await apiRequest(`Todo/${id}/complete`, { method: "PATCH" });
        showNotification("待办已完成", "success");
        invalidateQuotaSummary();
        await refreshTodoModule();
    } catch (error) {
        showNotification(error.message || "完成待办失败", "error");
    }
}

async function deleteTodo(id) {
    if (!window.confirm("确定删除这条待办吗？")) {
        return;
    }
    try {
        await apiRequest(`Todo/${id}`, { method: "DELETE" });
        showNotification("待办已删除", "success");
        invalidateQuotaSummary();
        await refreshTodoModule();
    } catch (error) {
        showNotification(error.message || "删除待办失败", "error");
    }
}

function updateTodoModeSections() {
    const weatherMode = qs("todoMode").value === "weather";
    qs("todoDescriptionGroup").classList.toggle("hidden", weatherMode);
    qs("todoPriorityGroup").classList.toggle("hidden", weatherMode);
    qs("todoGroupField").classList.toggle("hidden", weatherMode || !!qs("todoId").value);
    qs("weatherReminderGroup").classList.toggle("hidden", !weatherMode);
    qs("todoRepeatToggleGroup").classList.toggle("hidden", weatherMode);
    qs("weatherRainIntervalGroup").classList.toggle("hidden", !weatherMode || !qs("todoWeatherRainEnabled").checked);
    qs("todoTitle").readOnly = weatherMode;
    if (weatherMode) {
        qs("todoTitle").value = getLocalizedWeatherTodoTitle();
        qs("todoIsRepeated").checked = true;
    }
    toggleRepeatOptions();
}

function toggleRepeatOptions() {
    const weatherMode = qs("todoMode").value === "weather";
    if (weatherMode) {
        ["repeatModeGroup", "repeatIntervalGroup", "repeatRandomGroup", "repeatRandomRangeGroup", "repeatWeekDaysGroup", "repeatMonthDayGroup"].forEach((id) => qs(id).classList.add("hidden"));
        return;
    }

    const repeated = qs("todoIsRepeated").checked;
    const mode = qs("todoRepeatMode").value;
    const custom = repeated && mode === "CustomInterval";
    const weekly = repeated && mode === "Weekly";
    const monthly = repeated && mode === "Monthly";
    const random = custom && qs("todoRandomReminder").checked;
    qs("repeatModeGroup").classList.toggle("hidden", !repeated);
    qs("repeatIntervalGroup").classList.toggle("hidden", !custom);
    qs("repeatRandomGroup").classList.toggle("hidden", !custom);
    qs("repeatRandomRangeGroup").classList.toggle("hidden", !random);
    qs("repeatWeekDaysGroup").classList.toggle("hidden", !weekly);
    qs("repeatMonthDayGroup").classList.toggle("hidden", !monthly);
}

function getRepeatWeekDaysMask() {
    let mask = 0;
    if (qs("repeatMonday").checked) mask |= REPEAT_WEEKDAY_MASKS.monday;
    if (qs("repeatTuesday").checked) mask |= REPEAT_WEEKDAY_MASKS.tuesday;
    if (qs("repeatWednesday").checked) mask |= REPEAT_WEEKDAY_MASKS.wednesday;
    if (qs("repeatThursday").checked) mask |= REPEAT_WEEKDAY_MASKS.thursday;
    if (qs("repeatFriday").checked) mask |= REPEAT_WEEKDAY_MASKS.friday;
    if (qs("repeatSaturday").checked) mask |= REPEAT_WEEKDAY_MASKS.saturday;
    if (qs("repeatSunday").checked) mask |= REPEAT_WEEKDAY_MASKS.sunday;
    return mask;
}

function setRepeatWeekDaysMask(mask) {
    qs("repeatMonday").checked = (mask & REPEAT_WEEKDAY_MASKS.monday) !== 0;
    qs("repeatTuesday").checked = (mask & REPEAT_WEEKDAY_MASKS.tuesday) !== 0;
    qs("repeatWednesday").checked = (mask & REPEAT_WEEKDAY_MASKS.wednesday) !== 0;
    qs("repeatThursday").checked = (mask & REPEAT_WEEKDAY_MASKS.thursday) !== 0;
    qs("repeatFriday").checked = (mask & REPEAT_WEEKDAY_MASKS.friday) !== 0;
    qs("repeatSaturday").checked = (mask & REPEAT_WEEKDAY_MASKS.saturday) !== 0;
    qs("repeatSunday").checked = (mask & REPEAT_WEEKDAY_MASKS.sunday) !== 0;
}

function syncRepeatDateDefaults() {
    const value = qs("todoRemindTime").value;
    if (!value) {
        return;
    }
    const date = new Date(value);
    if (qs("todoRepeatMode").value === "Monthly") {
        qs("todoRepeatMonthDay").value = String(date.getDate());
    }
}

function alignRepeatTimeToWeekDays() {
    if (!qs("todoIsRepeated").checked || qs("todoRepeatMode").value !== "Weekly") {
        return;
    }
    const mask = getRepeatWeekDaysMask();
    if (!mask) {
        return;
    }
    const input = qs("todoRemindTime");
    const remindTime = input.value ? new Date(input.value) : new Date();
    for (let offset = 0; offset < 7; offset += 1) {
        const candidate = new Date(remindTime);
        candidate.setDate(remindTime.getDate() + offset);
        const day = (candidate.getDay() + 6) % 7;
        const expected = 1 << day;
        if ((mask & expected) !== 0) {
            input.value = formatDateTimeLocalValue(candidate);
            break;
        }
    }
}

function bindStickyEvents() {
    qs("addNoteBtn").addEventListener("click", () => openNoteModal());
    qs("refreshNotesBtn").addEventListener("click", loadStickyNotes);
    document.querySelectorAll("[data-sticky-view]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const view = btn.dataset.stickyView;
            state.sticky.currentView = view;
            renderStickyViews();
        });
    });
    qs("noteSearchInput").addEventListener("input", debounce(renderStickyNotes, 200));
    qs("noteDateFilter").addEventListener("change", () => {
        state.sticky.selectedDate = qs("noteDateFilter").value;
        if (state.sticky.selectedDate) {
            state.sticky.calendarMonth = startOfMonth(state.sticky.selectedDate);
        }
        renderStickyNotes();
        renderStickyDaySummary();
        renderStickyCalendar();
    });
    qs("clearNoteDateFilterBtn").addEventListener("click", () => {
        qs("noteDateFilter").value = "";
        state.sticky.selectedDate = "";
        renderStickyNotes();
        renderStickyDaySummary();
        renderStickyCalendar();
    });
    qs("noteForm").addEventListener("submit", handleSaveNote);
    qs("noteUploadImageBtn").addEventListener("click", () => qs("noteImageInput").click());
    qs("noteImageInput").addEventListener("change", uploadStickyNoteImage);
    qs("stickyPrevMonthBtn").addEventListener("click", () => {
        state.sticky.calendarMonth.setMonth(state.sticky.calendarMonth.getMonth() - 1);
        renderStickyCalendar();
    });
    qs("stickyNextMonthBtn").addEventListener("click", () => {
        state.sticky.calendarMonth.setMonth(state.sticky.calendarMonth.getMonth() + 1);
        renderStickyCalendar();
    });
}

async function loadStickyNotes() {
    try {
        const payload = await apiRequest("StickyNotes");
        state.sticky.items = unwrapCollection(payload).map(normalizeStickyNote);
        if (state.sticky.selectedDate && !state.sticky.items.some((item) => formatDate(item.noteDate) === state.sticky.selectedDate)) {
            state.sticky.selectedDate = "";
            qs("noteDateFilter").value = "";
        }
        renderStickyNotes();
        renderStickyCalendar();
        renderStickyDaySummary();
    } catch (error) {
        qs("stickyNotesGrid").innerHTML = renderEmpty(error.message || "加载便签失败");
    }
}

function renderStickyViews() {
    const view = state.sticky.currentView || "list";
    document.querySelectorAll("[data-sticky-view]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.stickyView === view);
    });
    qs("stickyViewList").classList.toggle("active", view === "list");
    qs("stickyViewCalendar").classList.toggle("active", view === "calendar");
}

function renderStickyNotes() {
    renderStickyViews();
    const keyword = qs("noteSearchInput").value.trim().toLowerCase();
    const dateFilter = qs("noteDateFilter").value || state.sticky.selectedDate;
    const items = state.sticky.items.filter((note) => {
        const text = `${note.title} ${stripHtml(note.contentHtml)}`.toLowerCase();
        if (keyword && !text.includes(keyword)) return false;
        if (dateFilter && formatDate(note.noteDate) !== dateFilter) return false;
        return true;
    });

    if (!items.length) {
        qs("stickyNotesGrid").innerHTML = renderEmpty("暂无便签");
        return;
    }

    qs("stickyNotesGrid").innerHTML = items.map((note) => `
        <article class="note-item">
            <div class="note-item-head">
                <div>
                    <h3>${escapeHtml(note.title || "未命名便签")}</h3>
                    <div class="meta-row">
                        <span>${escapeHtml(formatDate(note.noteDate))}</span>
                        <span>更新：${escapeHtml(formatDateTime(note.updatedAt))}</span>
                    </div>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-secondary" onclick="editNote('${note.id}')">编辑</button>
                    <button type="button" class="btn btn-ghost" onclick="deleteNote('${note.id}')">删除</button>
                </div>
            </div>
            <div>${sanitizeHtml(truncate(stripHtml(note.contentHtml), 180))}</div>
        </article>
    `).join("");
}

function renderStickyCalendar() {
    const monthStart = startOfMonth(state.sticky.calendarMonth);
    const today = formatDate(new Date());
    qs("stickyMonthLabel").textContent = `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, "0")}`;

    const firstWeekday = (monthStart.getDay() + 6) % 7;
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0);
    const noteCountByDate = state.sticky.items.reduce((map, note) => {
        const key = formatDate(note.noteDate);
        map.set(key, (map.get(key) || 0) + 1);
        return map;
    }, new Map());

    const cells = [];
    for (let i = 0; i < firstWeekday; i += 1) {
        cells.push('<div class="calendar-day muted"></div>');
    }

    for (let day = 1; day <= monthEnd.getDate(); day += 1) {
        const date = new Date(monthStart.getFullYear(), monthStart.getMonth(), day);
        const key = formatDate(date);
        const count = noteCountByDate.get(key) || 0;
        const active = state.sticky.selectedDate === key ? "active" : "";
        const extraClass = count ? "has-note" : "";
        cells.push(`
            <button type="button" class="calendar-day ${active} ${extraClass}" onclick="selectStickyDate('${key}')">
                <strong>${day}</strong>
                <small>${key === today ? "今天" : " "}</small>
                <small>${count ? `${count} 条` : "暂无记录"}</small>
            </button>
        `);
    }

    qs("stickyCalendarGrid").innerHTML = cells.join("");
}

function renderStickyDaySummary() {
    if (!state.sticky.selectedDate) {
        qs("stickyDayTitle").textContent = "按日期查看";
        qs("stickyDaySummary").innerHTML = renderEmpty("选择左侧日历中的日期后，这里会显示当天的便签摘要。");
        return;
    }

    const items = state.sticky.items
        .filter((note) => formatDate(note.noteDate) === state.sticky.selectedDate)
        .sort((a, b) => new Date(b.updatedAt || 0).getTime() - new Date(a.updatedAt || 0).getTime());

    qs("stickyDayTitle").textContent = state.sticky.selectedDate;
    if (!items.length) {
        qs("stickyDaySummary").innerHTML = renderEmpty("当天没有便签记录");
        return;
    }

    qs("stickyDaySummary").innerHTML = items.map((note) => `
        <article class="note-item">
            <div class="note-item-head">
                <div>
                    <strong>${escapeHtml(note.title || "未命名便签")}</strong>
                    <div class="meta-row">
                        <span>${escapeHtml(formatDateTime(note.updatedAt))}</span>
                    </div>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-secondary" onclick="editNote('${note.id}')">编辑</button>
                </div>
            </div>
            <p>${escapeHtml(truncate(stripHtml(note.contentHtml), 100))}</p>
        </article>
    `).join("");
}

function selectStickyDate(dateText) {
    state.sticky.selectedDate = dateText;
    state.sticky.calendarMonth = startOfMonth(dateText);
    qs("noteDateFilter").value = dateText;
    renderStickyNotes();
    renderStickyDaySummary();
    renderStickyCalendar();
}

function openNoteModal(note) {
    qs("noteForm").reset();
    qs("noteId").value = note?.id || "";
    qs("noteTitle").value = note?.title || "";
    qs("noteDate").value = note ? formatDate(note.noteDate) : formatDate(new Date());
    qs("noteEditor").innerHTML = note?.contentHtml || "";
    qs("noteModalTitle").textContent = note ? "编辑便签" : "新建便签";
    openModal("noteModal");
}

function editNote(id) {
    const note = state.sticky.items.find((item) => item.id === id);
    if (note) {
        openNoteModal(note);
    }
}

async function handleSaveNote(event) {
    event.preventDefault();
    const id = qs("noteId").value;
    const body = {
        title: qs("noteTitle").value.trim(),
        noteDate: qs("noteDate").value || null,
        contentHtml: qs("noteEditor").innerHTML.trim()
    };
    try {
        await apiRequest(id ? `StickyNotes/${id}` : "StickyNotes", {
            method: id ? "PUT" : "POST",
            body
        });
        closeModal("noteModal");
        showNotification(id ? "便签已更新" : "便签已创建", "success");
        await loadStickyNotes();
    } catch (error) {
        showNotification(error.message || "保存便签失败", "error");
    }
}

async function deleteNote(id) {
    if (!window.confirm("确定删除这条便签吗？")) return;
    try {
        await apiRequest(`StickyNotes/${id}`, { method: "DELETE" });
        showNotification("便签已删除", "success");
        await loadStickyNotes();
    } catch (error) {
        showNotification(error.message || "删除便签失败", "error");
    }
}

async function uploadStickyNoteImage() {
    const file = qs("noteImageInput").files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
        const payload = await apiRequest("StickyNotes/images", {
            method: "POST",
            body: formData
        });
        qs("noteEditor").innerHTML += `<p><img src="${escapeHtml(payload?.imageUrl || "")}" alt=""></p>`;
        qs("noteImageInput").value = "";
    } catch (error) {
        showNotification(error.message || "上传图片失败", "error");
    }
}

function bindPomodoroEvents() {
    document.querySelectorAll("[data-pomodoro-preset]").forEach((button) => {
        button.addEventListener("click", () => {
            qs("pomodoroFocusMinutes").value = button.dataset.pomodoroPreset;
            resetPomodoro();
        });
    });
    qs("pomodoroStartBtn").addEventListener("click", startPomodoro);
    qs("pomodoroPauseBtn").addEventListener("click", pausePomodoro);
    qs("pomodoroResetBtn").addEventListener("click", resetPomodoro);
    qs("pomodoroSkipBtn").addEventListener("click", skipPomodoroPhase);
    ["pomodoroTaskName", "pomodoroFocusMinutes", "pomodoroShortBreak", "pomodoroLongBreak"].forEach((id) => {
        qs(id).addEventListener("change", resetPomodoro);
    });
}

function renderPomodoro() {
    qs("pomodoroDisplay").textContent = formatDuration(state.pomodoro.remainingSeconds);
    qs("pomodoroPhaseLabel").textContent = state.pomodoro.phase === "focus" ? "专注中" : (state.pomodoro.phase === "shortBreak" ? "短休息" : "长休息");
    qs("pomodoroHint").textContent = state.pomodoro.isRunning ? "计时进行中" : "准备开始本轮专注";
    qs("pomodoroSessionsCount").textContent = String(state.pomodoro.sessionsCompleted);
    qs("pomodoroFocusedMinutes").textContent = `${Math.floor(state.pomodoro.focusedSeconds / 60)} 分钟`;
    qs("pomodoroCurrentTask").textContent = state.pomodoro.currentTask || "未设置";
}

function resetPomodoro() {
    pausePomodoro();
    state.pomodoro.focusMinutes = Number(qs("pomodoroFocusMinutes").value || 25);
    state.pomodoro.shortBreak = Number(qs("pomodoroShortBreak").value || 5);
    state.pomodoro.longBreak = Number(qs("pomodoroLongBreak").value || 15);
    state.pomodoro.currentTask = qs("pomodoroTaskName").value.trim();
    state.pomodoro.phase = "focus";
    state.pomodoro.remainingSeconds = state.pomodoro.focusMinutes * 60;
    renderPomodoro();
}

function startPomodoro() {
    if (state.pomodoro.isRunning) return;
    if (!state.pomodoro.remainingSeconds || state.pomodoro.phase === "focus" && state.pomodoro.remainingSeconds === state.pomodoro.focusMinutes * 60) {
        state.pomodoro.focusMinutes = Number(qs("pomodoroFocusMinutes").value || 25);
        state.pomodoro.shortBreak = Number(qs("pomodoroShortBreak").value || 5);
        state.pomodoro.longBreak = Number(qs("pomodoroLongBreak").value || 15);
        state.pomodoro.currentTask = qs("pomodoroTaskName").value.trim();
        if (!state.pomodoro.remainingSeconds) {
            state.pomodoro.remainingSeconds = state.pomodoro.focusMinutes * 60;
        }
    }
    state.pomodoro.isRunning = true;
    state.pomodoro.timerHandle = window.setInterval(() => {
        state.pomodoro.remainingSeconds -= 1;
        if (state.pomodoro.remainingSeconds <= 0) {
            finishPomodoroPhase();
        }
        renderPomodoro();
    }, 1000);
}

function pausePomodoro() {
    state.pomodoro.isRunning = false;
    if (state.pomodoro.timerHandle) {
        clearInterval(state.pomodoro.timerHandle);
        state.pomodoro.timerHandle = null;
    }
    renderPomodoro();
}

function finishPomodoroPhase() {
    pausePomodoro();
    if (state.pomodoro.phase === "focus") {
        state.pomodoro.sessionsCompleted += 1;
        state.pomodoro.focusedSeconds += state.pomodoro.focusMinutes * 60;
        localStorage.setItem("pomodoroSessionsCompleted", String(state.pomodoro.sessionsCompleted));
        localStorage.setItem("pomodoroFocusedSeconds", String(state.pomodoro.focusedSeconds));
        state.pomodoro.cycle += 1;
        state.pomodoro.phase = state.pomodoro.cycle % 4 === 0 ? "longBreak" : "shortBreak";
        state.pomodoro.remainingSeconds = (state.pomodoro.phase === "longBreak" ? state.pomodoro.longBreak : state.pomodoro.shortBreak) * 60;
        showNotification("本轮专注已完成", "success");
    } else {
        state.pomodoro.phase = "focus";
        state.pomodoro.remainingSeconds = state.pomodoro.focusMinutes * 60;
        showNotification("休息结束，开始下一轮专注", "info");
    }
    renderPomodoro();
}

function skipPomodoroPhase() {
    finishPomodoroPhase();
}

function bindGroupEvents() {
    qs("createGroupBtn").addEventListener("click", async () => {
        if (await ensureGroupMembershipAllowed("创建新的共享团队")) {
            openGroupModal();
        }
    });
    qs("refreshGroupsBtn").addEventListener("click", loadUserGroups);
    qs("joinGroupBtn").addEventListener("click", joinGroup);
    qs("groupForm").addEventListener("submit", handleSaveGroup);
}

async function loadUserGroups() {
    try {
        const payload = await apiRequest("Group/my-groups");
        state.groups.items = unwrapCollection(payload).map(normalizeGroup);
        if (state.groups.selectedId != null && !state.groups.items.some((item) => item.id === state.groups.selectedId)) {
            state.groups.selectedId = null;
        }
        renderGroupOptions();
        renderGroups();
        await syncAllSignalRGroups();
    } catch (error) {
        qs("groupsList").innerHTML = renderEmpty(error.message || "加载小组失败");
        qs("groupDetailPanel").innerHTML = renderEmpty("暂时无法获取小组详情");
    }
}

function renderGroupOptions() {
    const todoGroupOptions = ['<option value="">个人待办</option>'];
    const filterOptions = ['<option value="">全部小组</option>'];
    const quickCards = [];

    state.groups.items.forEach((group) => {
        todoGroupOptions.push(`<option value="${group.id}">${escapeHtml(group.groupName)}</option>`);
        filterOptions.push(`<option value="${group.id}">${escapeHtml(group.groupName)}</option>`);
        quickCards.push(`<button type="button" class="chip" onclick="filterByGroup(${group.id})">${escapeHtml(group.groupName)}</button>`);
    });

    qs("todoGroup").innerHTML = todoGroupOptions.join("");
    qs("todoGroupFilter").innerHTML = filterOptions.join("");
    qs("todoQuickGroups").innerHTML = quickCards.length ? quickCards.join("") : renderEmpty("暂无小组");
}

async function filterByGroup(groupId) {
    state.todo.filters.scope = "Team";
    state.todo.filters.groupId = String(groupId);
    qs("todoGroupFilter").value = String(groupId);
    document.querySelectorAll("[data-todo-scope]").forEach((button) => {
        button.classList.toggle("active", button.dataset.todoScope === "Team");
    });
    state.todo.currentPage = 1;

    if (state.activeModule !== "todo") {
        await setActiveModule("todo");
        return;
    }

    await refreshTodoModule();
}

function isGroupCreator(group) {
    return Number(group?.creatorId || 0) === Number(state.profile.info?.id || state.currentUser?.id || 0);
}

function buildGroupRoleLabel(group) {
    return isGroupCreator(group) ? "组长" : "成员";
}

function getGroupCachedMemberCount(groupId) {
    const members = state.groups.members[groupId];
    return Array.isArray(members) ? members.length : null;
}

function renderGroups() {
    if (!state.groups.items.length) {
        qs("groupsList").innerHTML = renderEmpty("暂无小组");
        qs("groupDetailPanel").innerHTML = renderEmpty("请选择或创建小组");
        qs("groupDetailSubtitle").textContent = "请选择左侧小组查看成员、角色和快捷操作";
        return;
    }

    if (state.groups.selectedId == null || !state.groups.items.some((item) => item.id === state.groups.selectedId)) {
        state.groups.selectedId = state.groups.items[0].id;
    }

    qs("groupsList").innerHTML = state.groups.items.map((group) => {
        const isActive = Number(group.id) === Number(state.groups.selectedId);
        const memberCount = getGroupCachedMemberCount(group.id);
        return `
            <article class="group-item ${isActive ? "group-item-active" : ""}" onclick="selectGroup(${group.id})">
                <div class="group-item-head">
                    <div>
                        <h3>${escapeHtml(group.groupName || "未命名小组")}</h3>
                        <p>${escapeHtml(group.description || "暂无说明")}</p>
                        <div class="tag-row">
                            <span class="tag">ID ${group.id}</span>
                            <span class="tag">${buildGroupRoleLabel(group)}</span>
                            ${memberCount == null ? '<span class="tag">成员待加载</span>' : `<span class="tag">成员 ${memberCount}</span>`}
                            ${isActive ? '<span class="tag success">当前查看</span>' : ""}
                        </div>
                    </div>
                    <div class="action-row">
                        <button type="button" class="btn btn-secondary" onclick="event.stopPropagation(); openMembersModal(${group.id})">成员</button>
                        <button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); openGroupTodoView(${group.id})">查看待办</button>
                        ${isGroupCreator(group)
                            ? `<button type="button" class="btn btn-secondary" onclick="event.stopPropagation(); openGroupModal(${group.id})">编辑</button><button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); deleteGroup(${group.id})">删除</button>`
                            : `<button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); leaveGroup(${group.id})">退出</button>`}
                    </div>
                </div>
            </article>
        `;
    }).join("");

    void renderGroupDetail();
}

function selectGroup(id) {
    state.groups.selectedId = Number(id);
    renderGroups();
}

async function openGroupTodoView(groupId) {
    await filterByGroup(groupId);
}

function renderGroupMemberPreview(group, members) {
    if (!members.length) {
        return renderEmpty("当前小组还没有成员信息");
    }

    const owner = isGroupCreator(group);
    const preview = members.slice(0, 5).map((member) => `
        <article class="member-item">
            <div class="member-item-head">
                <div class="entity-head">
                    ${buildUserAvatarMarkup(member, member.displayName || member.userName || "未命名成员", "sm")}
                    <div>
                        <strong>${escapeHtml(member.displayName || member.userName || "未命名成员")}</strong>
                        <div class="meta-row">
                            <span>${escapeHtml(member.userName || "-")}</span>
                            <span>${member.id === group.creatorId ? "组长" : "成员"}</span>
                        </div>
                    </div>
                </div>
                ${owner && member.id !== group.creatorId ? `<button type="button" class="btn btn-ghost" onclick="removeGroupMember(${group.id}, ${member.id})">移除</button>` : ""}
            </div>
        </article>
    `).join("");

    const restCount = members.length - 5;
    return `${preview}${restCount > 0 ? `<p class="field-hint">还有 ${restCount} 名成员，点击“查看全部成员”查看完整列表。</p>` : ""}`;
}

async function renderGroupDetail() {
    const group = state.groups.items.find((item) => item.id === state.groups.selectedId);
    if (!group) {
        qs("groupDetailSubtitle").textContent = "请选择左侧小组查看成员、角色和快捷操作";
        qs("groupDetailPanel").innerHTML = renderEmpty("请选择小组");
        return;
    }

    qs("groupDetailSubtitle").textContent = `${group.groupName} · ${buildGroupRoleLabel(group)}`;
    const members = await loadGroupMembers(group.id, true);
    const owner = isGroupCreator(group);

    qs("groupDetailPanel").innerHTML = `
        <div class="group-overview">
            <div>
                <h3>${escapeHtml(group.groupName || "未命名小组")}</h3>
                <p>${escapeHtml(group.description || "暂无说明")}</p>
            </div>
            <div class="action-row">
                <button type="button" class="btn btn-secondary" onclick="openMembersModal(${group.id})">查看全部成员</button>
                <button type="button" class="btn btn-ghost" onclick="openGroupTodoView(${group.id})">切换到该组待办</button>
                ${owner
                    ? `<button type="button" class="btn btn-secondary" onclick="openGroupModal(${group.id})">编辑小组</button><button type="button" class="btn btn-ghost" onclick="deleteGroup(${group.id})">删除小组</button>`
                    : `<button type="button" class="btn btn-ghost" onclick="leaveGroup(${group.id})">退出小组</button>`}
            </div>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><span>小组 ID</span><strong>${group.id}</strong></div>
            <div class="stat-card"><span>我的角色</span><strong>${buildGroupRoleLabel(group)}</strong></div>
            <div class="stat-card"><span>成员数量</span><strong>${members.length}</strong></div>
            <div class="stat-card"><span>协作范围</span><strong>共享待办</strong></div>
        </div>
        <div class="stack-form">
            <div class="card-head compact">
                <div>
                    <h4>成员预览</h4>
                    <p>组长可直接移除成员，普通成员仅可查看。</p>
                </div>
            </div>
            <div class="stack-list compact-list">
                ${renderGroupMemberPreview(group, members)}
            </div>
        </div>
    `;
}

function openGroupModal(groupId) {
    const group = state.groups.items.find((item) => item.id === groupId);
    qs("groupForm").reset();
    qs("groupId").value = group?.id || "";
    qs("groupName").value = group?.groupName || "";
    qs("groupDescription").value = group?.description || "";
    qs("groupModalTitle").textContent = group ? "编辑小组" : "创建小组";
    openModal("groupModal");
}

async function handleSaveGroup(event) {
    event.preventDefault();
    const id = qs("groupId").value;
    if (!id && !(await ensureGroupMembershipAllowed("创建新的共享团队"))) {
        return;
    }
    try {
        await apiRequest(id ? `Group/${id}` : "Group", {
            method: id ? "PUT" : "POST",
            body: {
                groupName: qs("groupName").value.trim(),
                description: qs("groupDescription").value.trim() || null
            }
        });
        closeModal("groupModal");
        showNotification(id ? "小组已更新" : "小组已创建", "success");
        invalidateQuotaSummary();
        await loadUserGroups();
    } catch (error) {
        showNotification(error.message || "保存小组失败", "error");
    }
}

async function joinGroup() {
    const groupId = Number(qs("joinGroupIdInput").value || 0);
    if (!groupId) {
        showNotification("请输入有效的小组 ID", "warning");
        return;
    }

    if (!(await ensureGroupMembershipAllowed("加入新的共享团队"))) {
        return;
    }

    try {
        await apiRequest(`Group/${groupId}/join`, { method: "POST" });
        qs("joinGroupIdInput").value = "";
        state.groups.selectedId = groupId;
        showNotification("已加入小组", "success");
        invalidateQuotaSummary();
        await Promise.all([loadUserGroups(), refreshTodoModule()]);
    } catch (error) {
        showNotification(error.message || "加入小组失败", "error");
    }
}

async function leaveGroup(groupId) {
    if (!window.confirm("确定退出该小组吗？")) return;
    try {
        await apiRequest(`Group/${groupId}/leave`, { method: "POST" });
        delete state.groups.members[groupId];
        if (Number(state.groups.selectedId) === Number(groupId)) {
            state.groups.selectedId = null;
        }
        if (String(state.todo.filters.groupId) === String(groupId)) {
            state.todo.filters.groupId = "";
        }
        showNotification("已退出小组", "success");
        invalidateQuotaSummary();
        await Promise.all([loadUserGroups(), refreshTodoModule()]);
    } catch (error) {
        showNotification(error.message || "退出小组失败", "error");
    }
}

async function deleteGroup(groupId) {
    if (!window.confirm("确定删除这个小组吗？删除后成员协作关系会一并移除。")) return;
    try {
        await apiRequest(`Group/${groupId}`, { method: "DELETE" });
        delete state.groups.members[groupId];
        if (Number(state.groups.selectedId) === Number(groupId)) {
            state.groups.selectedId = null;
        }
        if (String(state.todo.filters.groupId) === String(groupId)) {
            state.todo.filters.groupId = "";
        }
        showNotification("小组已删除", "success");
        invalidateQuotaSummary();
        await Promise.all([loadUserGroups(), refreshTodoModule()]);
    } catch (error) {
        showNotification(error.message || "删除小组失败", "error");
    }
}

async function loadGroupMembers(groupId, silent = false) {
    if (state.groups.members[groupId]) {
        return state.groups.members[groupId];
    }
    try {
        const payload = await apiRequest(`Group/${groupId}/members`);
        state.groups.members[groupId] = unwrapCollection(payload).map(normalizeUser);
        return state.groups.members[groupId];
    } catch (error) {
        if (!silent) {
            showNotification(error.message || "加载成员失败", "error");
        }
        return [];
    }
}

async function openMembersModal(groupId) {
    const group = state.groups.items.find((item) => item.id === groupId);
    const members = await loadGroupMembers(groupId);
    const owner = isGroupCreator(group);
    qs("groupMembersTitle").textContent = `${group?.groupName || "小组"}成员`;
    qs("groupMembersContent").innerHTML = members.length
        ? members.map((member) => `
            <article class="member-item">
                <div class="member-item-head">
                    <div>
                        <strong>${escapeHtml(member.displayName || member.userName || "未命名成员")}</strong>
                        <div class="meta-row">
                            <span>${escapeHtml(member.userName || "-")}</span>
                            <span>${member.id === group?.creatorId ? "组长" : "成员"}</span>
                            <span>${escapeHtml(member.email || "未绑定邮箱")}</span>
                        </div>
                    </div>
                    ${owner && member.id !== group?.creatorId ? `<button type="button" class="btn btn-ghost" onclick="removeGroupMember(${groupId}, ${member.id})">移除</button>` : ""}
                </div>
            </article>
        `).join("")
        : renderEmpty("暂无成员");
    openModal("groupMembersModal");
}

async function removeGroupMember(groupId, memberId) {
    if (!window.confirm("确定移除该成员吗？")) return;
    try {
        await apiRequest(`Group/${groupId}/members/${memberId}`, { method: "DELETE" });
        delete state.groups.members[groupId];
        showNotification("成员已移除", "success");
        await renderGroupDetail();
        await openMembersModal(groupId);
    } catch (error) {
        showNotification(error.message || "移除成员失败", "error");
    }
}

function bindCommunityEvents() {
    document.querySelectorAll("[data-community-tab]").forEach((button) => {
        button.addEventListener("click", () => {
            if (button.dataset.communityTab === "publish" && !canCreateCommunityPost()) {
                showCommunityPublishPrivilegePrompt();
                return;
            }
            state.community.tab = button.dataset.communityTab;
            renderCommunityTabs();
        });
    });
    qs("refreshCommunityBtn").addEventListener("click", loadCommunityBootstrap);
    qs("communityPostForm").addEventListener("submit", handleSaveCommunityPost);
    qs("resetCommunityPostBtn").addEventListener("click", resetCommunityPostForm);
    qs("communityUploadImageBtn").addEventListener("click", () => qs("communityPostImageInput").click());
    qs("communityPostImageInput").addEventListener("change", uploadCommunityPostImage);
    qs("communityPublishPrivilegePlansBtn")?.addEventListener("click", async () => {
        closeModal("communityPublishPrivilegeModal");
        await setActiveModule("plans");
    });
    qs("saveCommunityCategoryBtn").addEventListener("click", handleSaveCommunityCategory);
    qs("resetCommunityCategoryBtn").addEventListener("click", resetCommunityCategoryForm);
    qs("communityCategoryName").addEventListener("input", () => {
        if (!qs("communityCategoryId").value) {
            qs("communityCategorySlug").value = qs("communityCategoryName").value.trim().toLowerCase().replace(/\s+/g, "-");
        }
    });
    qs("communityManagePostKeyword")?.addEventListener("input", (event) => {
        state.community.managePostKeyword = event.target.value || "";
        renderCommunityManagePosts();
    });
    qs("communityManagePostStatus")?.addEventListener("change", (event) => {
        state.community.managePostStatus = event.target.value || "all";
        renderCommunityManagePosts();
    });
    qs("communityManageUserKeyword")?.addEventListener("input", (event) => {
        state.community.manageUserKeyword = event.target.value || "";
        renderCommunityManageUsers();
    });
    qs("communityManageUserFilter")?.addEventListener("change", (event) => {
        state.community.manageUserFilter = event.target.value || "all";
        renderCommunityManageUsers();
    });
}

function renderCommunityTabs() {
    const isAdmin = getCommunityCanManage();
    const canCreatePost = canCreateCommunityPost();
    document.querySelectorAll("[data-community-tab]").forEach((button) => {
        button.classList.toggle("active", button.dataset.communityTab === state.community.tab);
        // Hide admin-only tabs for non-admin users
        if (button.classList.contains("admin-only")) {
            button.style.display = isAdmin ? "" : "none";
        }
    });
    ["feed", "publish", "profile", "posts", "users", "categories"].forEach((tab) => {
        qs(`communityTab${tab.charAt(0).toUpperCase()}${tab.slice(1)}`).classList.toggle("active", state.community.tab === tab);
    });
    // If current tab is admin-only and user is not admin, switch to feed
    if (!isAdmin && ["posts", "users", "categories"].includes(state.community.tab)) {
        state.community.tab = "feed";
        renderCommunityTabs();
    }
    // If current tab is publish and user cannot create post, switch to feed
    if (!canCreatePost && state.community.tab === "publish") {
        state.community.tab = "feed";
        renderCommunityTabs();
    }
}

function getCommunityCanManage() {
    return !!(state.community.bootstrap?.canManage || state.community.bootstrap?.profile?.isAdmin || state.profile.info?.isAdmin);
}

function canCreateCommunityPost() {
    if (typeof state.community.bootstrap?.profile?.canCreatePost === "boolean") {
        return state.community.bootstrap.profile.canCreatePost;
    }
    const user = getCurrentUserProfile();
    return !!(user.isAdmin || user.isPro);
}

function setProPrivilegePromptContent(options = {}) {
    const prompt = {
        ...DEFAULT_PRO_PRIVILEGE_PROMPT,
        ...(options || {})
    };
    qs("communityPublishPrivilegeEyebrow").textContent = prompt.eyebrow;
    qs("communityPublishPrivilegeTitle").textContent = prompt.title;
    qs("communityPublishPrivilegeCopy").textContent = prompt.copy;
}

function showProPrivilegePrompt(options = {}) {
    setProPrivilegePromptContent(options);
    openModal("communityPublishPrivilegeModal");
}

function showCommunityPublishPrivilegePrompt() {
    showProPrivilegePrompt();
}

function extractRestrictedChannelTypes(message) {
    const text = String(message || "").trim();
    const match = text.match(/Following notification channels require Pro:\s*(.+)$/i);
    if (!match) {
        return [];
    }

    return match[1]
        .split(",")
        .map((item) => String(item || "").trim().toLowerCase())
        .filter(Boolean);
}

function isRestrictedChannelProError(error) {
    const rawMessage = String(error?.rawMessage || "").trim();
    const message = String(error?.message || "").trim();
    return /Following notification channels require Pro:/i.test(rawMessage)
        || rawMessage.includes("仅 Pro 用户可使用该接口")
        || message.includes("仅限 Pro 用户使用")
        || message.includes("仅 Pro 用户可使用");
}

function getChannelTypeDisplayName(type) {
    return getChannelTypeMeta(type)?.name || String(type || "").trim();
}

function showChannelPrivilegePrompt(channelTypes = []) {
    const uniqueNames = [...new Set(
        (channelTypes || [])
            .map(getChannelTypeDisplayName)
            .filter(Boolean)
    )];
    const channelLabel = uniqueNames.length
        ? `当前选择的「${uniqueNames.join("、")}」通知渠道`
        : "当前通知渠道";

    showProPrivilegePrompt({
        eyebrow: "通知渠道",
        title: "Pro用户专享通知渠道",
        copy: `${channelLabel}仅限 Pro 用户保存和使用。升级为 Pro 后即可继续完成渠道配置，并在提醒与转发场景中正常使用。`
    });
}

function getCommunityCategories() {
    const bootstrap = state.community.bootstrap || {};
    const categories = bootstrap.categories || [];
    return categories.slice().sort((a, b) => Number(a.sortOrder || 0) - Number(b.sortOrder || 0));
}

function getCommunityPosts(source = "feed") {
    const bootstrap = state.community.bootstrap || {};
    const profileId = Number(bootstrap.profile?.userId || state.profile.info?.id || 0);
    const management = bootstrap.management || {};
    const posts = source === "manage"
        ? (getCommunityCanManage() ? (management.posts || []) : (bootstrap.posts || []).filter((item) => item.authoredByCurrentUser || Number(item.userId || 0) === profileId))
        : (bootstrap.posts || []);
    return posts.slice().sort((a, b) => {
        if (!!b.isPinned !== !!a.isPinned) return Number(!!b.isPinned) - Number(!!a.isPinned);
        return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime();
    });
}

function getCommunityPostById(id) {
    return getCommunityPosts("manage").find((item) => Number(item.id) === Number(id))
        || getCommunityPosts("feed").find((item) => Number(item.id) === Number(id))
        || null;
}

function getCommunityUsers() {
    const users = (state.community.bootstrap?.management?.users || []).slice();
    return users.sort((a, b) => {
        if (!!b.isAdmin !== !!a.isAdmin) return Number(!!b.isAdmin) - Number(!!a.isAdmin);
        if (!!b.isPro !== !!a.isPro) return Number(!!b.isPro) - Number(!!a.isPro);
        return String(a.userName || "").localeCompare(String(b.userName || ""));
    });
}

function getCommunityPostSearchText(post) {
    return [post.title, post.summary, stripHtml(post.content || ""), post.authorName, post.categoryName]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
}

function matchesCommunityPostFilters(post) {
    const keyword = String(state.community.managePostKeyword || "").trim().toLowerCase();
    const status = state.community.managePostStatus || "all";
    if (keyword && !getCommunityPostSearchText(post).includes(keyword)) {
        return false;
    }
    if (status === "published") return post.isPublished !== false;
    if (status === "draft") return post.isPublished === false;
    if (status === "pinned") return !!post.isPinned;
    if (status === "mine") return !!post.authoredByCurrentUser || Number(post.userId || 0) === Number(state.profile.info?.id || 0);
    return true;
}

function matchesCommunityUserFilters(user) {
    const keyword = String(state.community.manageUserKeyword || "").trim().toLowerCase();
    const filter = state.community.manageUserFilter || "all";
    const searchText = [user.displayName, user.userName, user.email].filter(Boolean).join(" ").toLowerCase();
    if (keyword && !searchText.includes(keyword)) {
        return false;
    }
    if (filter === "admin") return !!user.isAdmin;
    if (filter === "pro") return !!user.isPro;
    if (filter === "inactive") return user.isActive === false;
    return true;
}

async function loadCommunityAdminData() {
    if (!getCommunityCanManage()) {
        state.community.admin.connections = [];
        state.community.admin.jobs = [];
        renderCommunityAdminBoard();
        return;
    }

    try {
        const [connections, jobs] = await Promise.all([
            apiRequest("Admin/connections"),
            apiRequest("Admin/jobs")
        ]);
        state.community.admin.connections = unwrapCollection(connections).map((item) => normalizePayload(item || {}));
        state.community.admin.jobs = unwrapCollection(jobs).map((item) => normalizePayload(item || {}));
        renderCommunityAdminBoard();
    } catch (error) {
        qs("communityAdminBoard").innerHTML = renderEmpty(error.message || "加载后台看板失败");
    }
}

async function loadCommunityBootstrap() {
    try {
        const payload = await apiRequest(`community/bootstrap?t=${Date.now()}`);
        state.community.bootstrap = normalizeCommunityBootstrap(payload || {});
        const categories = getCommunityCategories().map((item) => String(item.id));
        if (state.community.categoryId !== "all" && !categories.includes(String(state.community.categoryId))) {
            state.community.categoryId = "all";
        }
        renderCommunity();
        if (state.community.detail.currentPostId) {
            renderCommunityPostDetail();
        }
        await loadCommunityAdminData();
    } catch (error) {
        qs("communityFeedList").innerHTML = renderEmpty(error.message || "加载社区失败");
        showNotification(error.message || "加载社区失败", "error");
    }
}

function renderCommunity() {
    renderCommunityTabs();
    renderCommunitySummary();
    renderCommunityFeed();
    renderCommunityCategoryOptions();
    renderCommunityProfile();
    renderCommunityManagePosts();
    renderCommunityManageUsers();
    renderCommunityManageCategories();
    renderCommunityAdminBoard();
}

function renderCommunitySummary() {
    const bootstrap = state.community.bootstrap || {};
    const profile = bootstrap.profile || {};
    qs("communitySummary").innerHTML = `
        <div class="stat-card"><span>社区名称</span><strong>${escapeHtml(bootstrap.communityName || "社区")}</strong></div>
        <div class="stat-card"><span>我的帖子</span><strong>${Number(profile.postCount || 0)}</strong></div>
        <div class="stat-card"><span>我的评论</span><strong>${Number(profile.commentCount || 0)}</strong></div>
        <div class="stat-card"><span>管理权限</span><strong>${getCommunityCanManage() ? "已开启" : "未开启"}</strong></div>
    `;
}

function renderCommunityProfile() {
    const bootstrap = state.community.bootstrap || {};
    const profile = bootstrap.profile || {};
    const posts = getCommunityPosts("feed");
    const likedPosts = posts.filter(item => item.likedByCurrentUser);
    const favoritePosts = posts.filter(item => item.favoritedByCurrentUser);
    const myPosts = posts.filter(item => item.authoredByCurrentUser);
    const commentedPosts = posts.filter(item => item.comments?.some(comment => comment.isCurrentUser));
    
    qs("communityProfileContent").innerHTML = `
        <div class="card">
            <h3>个人信息</h3>
            <div class="stats-grid">
                <div class="stat-card"><span>用户名</span><strong>${escapeHtml(profile.userName || "guest")}</strong></div>
                <div class="stat-card"><span>显示名</span><strong>${escapeHtml(profile.displayName || profile.userName || "guest")}</strong></div>
                <div class="stat-card"><span>身份</span><strong>${profile.isAdmin ? "管理员" : (profile.isPro ? "Pro用户" : "普通用户")}</strong></div>
                <div class="stat-card"><span>发帖权限</span><strong>${profile.canCreatePost ? "已开启" : "未开启"}</strong></div>
            </div>
        </div>
        <div class="card">
            <h3>我的统计</h3>
            <div class="stats-grid">
                <div class="stat-card"><span>发帖数</span><strong>${Number(profile.postCount || 0)}</strong></div>
                <div class="stat-card"><span>评论数</span><strong>${Number(profile.commentCount || 0)}</strong></div>
                <div class="stat-card"><span>点赞数</span><strong>${Number(profile.likeCount || 0)}</strong></div>
                <div class="stat-card"><span>收藏数</span><strong>${Number(profile.favoriteCount || 0)}</strong></div>
            </div>
        </div>
        <div class="card">
            <h3>我的帖子 (${myPosts.length})</h3>
            <div class="post-list">${myPosts.length ? myPosts.map(post => renderCommunityPostCard(post, "profile")).join("") : "<p>暂无帖子</p>"}</div>
        </div>
        <div class="card">
            <h3>我点赞的 (${likedPosts.length})</h3>
            <div class="post-list">${likedPosts.length ? likedPosts.map(post => renderCommunityPostCard(post, "profile")).join("") : "<p>暂无帖子</p>"}</div>
        </div>
        <div class="card">
            <h3>我收藏的 (${favoritePosts.length})</h3>
            <div class="post-list">${favoritePosts.length ? favoritePosts.map(post => renderCommunityPostCard(post, "profile")).join("") : "<p>暂无帖子</p>"}</div>
        </div>
        <div class="card">
            <h3>我评论的 (${commentedPosts.length})</h3>
            <div class="post-list">${commentedPosts.length ? commentedPosts.map(post => renderCommunityPostCard(post, "profile")).join("") : "<p>暂无帖子</p>"}</div>
        </div>
    `;
}

function renderCommunityCategoryOptions() {
    const categories = getCommunityCategories();
    qs("communityCategoryFilters").innerHTML = [`<button type="button" class="chip ${state.community.categoryId === "all" ? "active" : ""}" onclick="setCommunityCategory('all')">全部</button>`]
        .concat(categories.map((item) => `<button type="button" class="chip ${String(state.community.categoryId) === String(item.id) ? "active" : ""}" onclick="setCommunityCategory('${item.id}')">${escapeHtml(item.name)}</button>`))
        .join("");
    qs("communityCategorySelect").innerHTML = categories.length
        ? categories.map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`).join("")
        : '<option value="">暂无分类</option>';
}

function setCommunityCategory(id) {
    state.community.categoryId = String(id);
    renderCommunityCategoryOptions();
    renderCommunityFeed();
}

function renderCommunityFeed() {
    const posts = getCommunityPosts("feed").filter((item) => state.community.categoryId === "all" || String(item.categoryId) === String(state.community.categoryId));
    qs("communityFeedList").innerHTML = posts.length
        ? posts.map((post) => renderCommunityPostCard(post, "feed")).join("")
        : renderEmpty("暂无帖子");
}

function handleCommunityPostCardClick(event, postId) {
    if (isInteractiveElement(event.target)) {
        return;
    }
    openCommunityPostDetail(postId);
}

function handleCommunityPostCardKeydown(event, postId) {
    if (!["Enter", " ", "Spacebar"].includes(event.key)) {
        return;
    }
    if (isInteractiveElement(event.target)) {
        return;
    }
    event.preventDefault();
    openCommunityPostDetail(postId);
}

function renderCommunityPostCard(post, mode = "feed") {
    const summary = truncate(post.summary || stripHtml(post.content || ""), 160);
    const publishedText = post.isPublished === false ? "草稿" : "已发布";
    const authorName = post.authorName || "未知作者";
    return `
        <article class="post-item post-item-clickable" data-community-post-id="${post.id}" tabindex="0" onclick="handleCommunityPostCardClick(event, ${post.id})" onkeydown="handleCommunityPostCardKeydown(event, ${post.id})">
            <div class="post-item-head">
                <div class="entity-head">
                    ${buildUserAvatarMarkup(post, authorName, "sm")}
                    <div>
                        <h3>${escapeHtml(post.title || "未命名帖子")}</h3>
                        <div class="meta-row">
                            <span>${escapeHtml(post.categoryName || "未分类")}</span>
                            <span>${escapeHtml(authorName)}</span>
                            <span>${escapeHtml(post.publishedAt ? formatDateTime(post.publishedAt) : "未发布")}</span>
                            <span>评论 ${Number(post.commentCount || 0)}</span>
                        </div>
                    </div>
                </div>
                <div class="tag-row">
                    ${post.isPinned ? '<span class="tag">置顶</span>' : ""}
                    <span class="tag ${post.isPublished === false ? "danger" : "success"}">${publishedText}</span>
                    ${mode === "manage" && post.authoredByCurrentUser ? '<span class="tag">我的帖子</span>' : ""}
                </div>
            </div>
            <p>${escapeHtml(summary || "暂无摘要")}</p>
            <div class="action-row">
                <button type="button" class="btn btn-secondary" onclick="event.stopPropagation(); openCommunityPostDetail(${post.id})">详情</button>
                <button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); toggleCommunityLike(${post.id})">点赞 ${Number(post.likeCount || 0)}</button>
                <button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); toggleCommunityFavorite(${post.id})">收藏 ${Number(post.favoriteCount || 0)}</button>
                ${post.canEdit ? `<button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); editCommunityPost(${post.id})">编辑</button>` : ""}
                ${post.canDelete ? `<button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); deleteCommunityPost(${post.id})">删除</button>` : ""}
            </div>
        </article>
    `;
}

function resetCommunityPostForm() {
    qs("communityPostForm").reset();
    qs("communityPostId").value = "";
    qs("communityPostEditor").innerHTML = "";
}

async function handleSaveCommunityPost(event) {
    event.preventDefault();
    if (!canCreateCommunityPost()) {
        showCommunityPublishPrivilegePrompt();
        return;
    }
    const id = qs("communityPostId").value;
    const body = {
        categoryId: Number(qs("communityCategorySelect").value || 0),
        title: qs("communityPostTitle").value.trim(),
        content: qs("communityPostEditor").innerHTML.trim(),
        isPublished: qs("communityPostPublished").checked,
        isPinned: qs("communityPostPinned").checked
    };

    try {
        await apiRequest(id ? `community/posts/${id}` : "community/posts", {
            method: id ? "PUT" : "POST",
            body
        });
        showNotification(id ? "帖子已更新" : "帖子已保存", "success");
        resetCommunityPostForm();
        await loadCommunityBootstrap();
        state.community.tab = "posts";
        renderCommunityTabs();
    } catch (error) {
        showNotification(error.message || "保存帖子失败", "error");
    }
}

function editCommunityPost(id) {
    const post = getCommunityPostById(id);
    if (!post) return;
    if (!canCreateCommunityPost()) {
        showCommunityPublishPrivilegePrompt();
        return;
    }
    qs("communityPostId").value = post.id;
    qs("communityCategorySelect").value = post.categoryId;
    qs("communityPostTitle").value = post.title || "";
    qs("communityPostEditor").innerHTML = post.content || "";
    qs("communityPostPublished").checked = post.isPublished !== false;
    qs("communityPostPinned").checked = !!post.isPinned;
    state.community.tab = "publish";
    renderCommunityTabs();
}

async function deleteCommunityPost(id) {
    if (!window.confirm("确定删除这篇帖子吗？")) return;
    try {
        await apiRequest(`community/posts/${id}`, { method: "DELETE" });
        showNotification("帖子已删除", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "删除帖子失败", "error");
    }
}

async function uploadCommunityPostImage() {
    const file = qs("communityPostImageInput").files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
        const payload = await apiRequest("community/posts/images", {
            method: "POST",
            body: formData
        });
        qs("communityPostEditor").innerHTML += `<p><img src="${escapeHtml(payload?.imageUrl || "")}" alt=""></p>`;
        qs("communityPostImageInput").value = "";
    } catch (error) {
        showNotification(error.message || "上传社区图片失败", "error");
    }
}

function renderCommunityManagePosts() {
    const posts = getCommunityPosts("manage");
    const filtered = posts.filter(matchesCommunityPostFilters);
    qs("communityManagePosts").innerHTML = `
        <div class="management-shell">
            <div class="stats-grid">
                <div class="stat-card"><span>全部帖子</span><strong>${posts.length}</strong></div>
                <div class="stat-card"><span>已发布</span><strong>${posts.filter((item) => item.isPublished !== false).length}</strong></div>
                <div class="stat-card"><span>草稿</span><strong>${posts.filter((item) => item.isPublished === false).length}</strong></div>
                <div class="stat-card"><span>置顶</span><strong>${posts.filter((item) => item.isPinned).length}</strong></div>
            </div>
            ${filtered.length
                ? `<div class="post-grid">${filtered.map((post) => renderCommunityPostCard(post, "manage")).join("")}</div>`
                : renderEmpty("没有符合条件的帖子")}
        </div>
    `;
}

function renderCommunityManageUsers() {
    if (!getCommunityCanManage()) {
        qs("communityManageUsers").innerHTML = renderEmpty("当前账号没有用户管理权限");
        return;
    }
    const users = getCommunityUsers();
    const filtered = users.filter(matchesCommunityUserFilters);
    qs("communityManageUsers").innerHTML = `
        <div class="management-shell">
            <div class="stats-grid">
                <div class="stat-card"><span>全部用户</span><strong>${users.length}</strong></div>
                <div class="stat-card"><span>管理员</span><strong>${users.filter((item) => item.isAdmin).length}</strong></div>
                <div class="stat-card"><span>Pro 用户</span><strong>${users.filter((item) => item.isPro).length}</strong></div>
                <div class="stat-card"><span>停用账号</span><strong>${users.filter((item) => item.isActive === false).length}</strong></div>
            </div>
            ${filtered.length ? `<div class="user-grid">${filtered.map((user) => `
                <article class="user-item">
                    <div class="user-item-head">
                        <div class="entity-head">
                            ${buildUserAvatarMarkup(user, user.displayName || user.userName || "未命名用户")}
                            <div>
                                <h3>${escapeHtml(user.displayName || user.userName || "未命名用户")}</h3>
                                <div class="meta-row">
                                    <span>${escapeHtml(user.userName || "-")}</span>
                                    <span>${escapeHtml(user.email || "未绑定邮箱")}</span>
                                    <span>${escapeHtml(user.createTime ? formatDateTime(user.createTime) : "创建时间未知")}</span>
                                </div>
                            </div>
                        </div>
                        <div class="tag-row">
                            ${user.isAdmin ? '<span class="tag">管理员</span>' : ""}
                            ${user.isPro ? '<span class="tag success">Pro</span>' : ""}
                            ${user.isActive === false ? '<span class="tag danger">停用</span>' : '<span class="tag success">正常</span>'}
                        </div>
                    </div>
                    <div class="meta-row">
                        <span>帖子 ${Number(user.postCount || 0)}</span>
                        <span>评论 ${Number(user.commentCount || 0)}</span>
                        <span>点赞 ${Number(user.likeCount || 0)}</span>
                        <span>收藏 ${Number(user.favoriteCount || 0)}</span>
                    </div>
                    <div class="action-row">
                        <button type="button" class="btn btn-secondary" onclick="updateCommunityUser(${user.userId}, 'isAdmin', ${!user.isAdmin})">${user.isAdmin ? "取消管理员" : "设为管理员"}</button>
                        <button type="button" class="btn btn-secondary" onclick="updateCommunityUser(${user.userId}, 'isPro', ${!user.isPro})">${user.isPro ? "取消 Pro" : "授予 Pro"}</button>
                        <button type="button" class="btn btn-ghost" onclick="updateCommunityUser(${user.userId}, 'isActive', ${user.isActive === false})">${user.isActive === false ? "启用账号" : "停用账号"}</button>
                    </div>
                </article>
            `).join("")}</div>` : renderEmpty("没有符合条件的用户")}
        </div>
    `;
}

function renderCommunityAdminBoard() {
    if (!getCommunityCanManage()) {
        qs("communityAdminBoard").innerHTML = "";
        return;
    }

    const connections = (state.community.admin.connections || []).slice();
    const jobs = (state.community.admin.jobs || []).slice().sort((a, b) => new Date(a.nextFireTime || 0).getTime() - new Date(b.nextFireTime || 0).getTime());
    const activeJobs = jobs.filter((item) => !/idle|paused|complete|deleted/i.test(String(item.state || ""))).length;
    qs("communityAdminBoard").innerHTML = `
        <article class="detail-panel admin-shell">
            <div class="card-head compact">
                <div>
                    <h3>社区后台管理</h3>
                    <p>集中查看在线连接、调度任务和测试提醒发送状态。</p>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-ghost" onclick="loadCommunityAdminData()">刷新看板</button>
                    <button type="button" class="btn btn-secondary" onclick="clearCommunityJobs()">清空任务</button>
                </div>
            </div>
            <div class="stats-grid">
                <div class="stat-card"><span>在线连接</span><strong>${connections.length}</strong></div>
                <div class="stat-card"><span>调度任务</span><strong>${jobs.length}</strong></div>
                <div class="stat-card"><span>活跃任务</span><strong>${activeJobs}</strong></div>
                <div class="stat-card"><span>测试入口</span><strong>已启用</strong></div>
            </div>
            <div class="module-grid admin-grid">
                <div class="stack-list">
                    <div class="card-head compact">
                        <div>
                            <h4>在线连接</h4>
                            <p>用于确认当前有哪些用户仍保持实时连接。</p>
                        </div>
                    </div>
                    ${(connections.length ? connections : [{ connectionId: "-", userId: "-" }]).map((item) => `
                        <article class="member-item admin-list-item">
                            <div class="member-item-head">
                                <div>
                                    <strong>${escapeHtml(String(item.connectionId || "-"))}</strong>
                                    <div class="meta-row">
                                        <span>用户 ID ${escapeHtml(String(item.userId || "-"))}</span>
                                    </div>
                                </div>
                                <span class="tag success">在线</span>
                            </div>
                        </article>
                    `).join("")}
                </div>
                <div class="stack-list">
                    <div class="card-head compact">
                        <div>
                            <h4>调度任务</h4>
                            <p>支持按任务键删除单个任务，或清空全部计划任务。</p>
                        </div>
                    </div>
                    ${(jobs.length ? jobs : [{ jobKey: "-", triggerKey: "-", state: "Idle", nextFireTime: "" }]).map((item) => `
                        <article class="member-item admin-list-item">
                            <div class="member-item-head">
                                <div>
                                    <strong>${escapeHtml(item.jobKey || "-")}</strong>
                                    <div class="meta-row">
                                        <span>${escapeHtml(item.triggerKey || "-")}</span>
                                        <span>${escapeHtml(item.nextFireTime ? formatDateTime(item.nextFireTime) : "未设置下一次执行")}</span>
                                    </div>
                                </div>
                                <div class="tag-row">
                                    <span class="tag ${/error|fail|pause|blocked/i.test(String(item.state || "")) ? "danger" : (/idle/i.test(String(item.state || "")) ? "" : "success")}">${escapeHtml(item.state || "未知")}</span>
                                    ${item.jobKey && item.jobKey !== "-" ? `<button type="button" class="btn btn-ghost" onclick="deleteCommunityJob('${escapeHtml(item.jobKey)}')">删除</button>` : ""}
                                </div>
                            </div>
                        </article>
                    `).join("")}
                </div>
            </div>
            <div class="form-grid">
                <div class="form-field">
                    <label for="communityAdminTestUserId">目标用户 ID</label>
                    <input id="communityAdminTestUserId" class="input" type="number" min="1" placeholder="输入需要接收测试提醒的用户 ID">
                </div>
                <div class="form-field">
                    <label for="communityAdminTestTitle">提醒标题</label>
                    <input id="communityAdminTestTitle" class="input" type="text" value="社区后台测试提醒">
                </div>
            </div>
            <div class="form-field">
                <label for="communityAdminTestMessage">提醒内容</label>
                <textarea id="communityAdminTestMessage" class="input textarea" rows="3">这是一条来自网页端社区后台的测试提醒，用于验证消息链路。</textarea>
            </div>
            <div class="action-row">
                <button type="button" class="btn btn-primary" onclick="sendCommunityAdminTest()">发送测试提醒</button>
            </div>
        </article>
    `;
}

async function updateCommunityUser(userId, key, value) {
    try {
        await apiRequest(`community/users/${userId}`, {
            method: "PUT",
            body: { [key]: value }
        });
        showNotification("用户状态已更新", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "更新用户失败", "error");
    }
}

async function deleteCommunityJob(jobKey) {
    if (!jobKey || !window.confirm(`确定删除任务 ${jobKey} 吗？`)) return;
    try {
        await apiRequest(`Admin/jobs/${encodeURIComponent(jobKey)}`, { method: "DELETE" });
        showNotification("任务已删除", "success");
        await loadCommunityAdminData();
    } catch (error) {
        showNotification(error.message || "删除任务失败", "error");
    }
}

async function clearCommunityJobs() {
    if (!window.confirm("确定清空全部计划任务吗？此操作不可撤销。")) return;
    try {
        await apiRequest("Admin/jobs", { method: "DELETE" });
        showNotification("计划任务已清空", "success");
        await loadCommunityAdminData();
    } catch (error) {
        showNotification(error.message || "清空任务失败", "error");
    }
}

async function sendCommunityAdminTest(userId) {
    const targetUserId = Number(userId || qs("communityAdminTestUserId")?.value || 0);
    if (!targetUserId) {
        showNotification("请输入目标用户 ID", "warning");
        return;
    }

    const title = qs("communityAdminTestTitle")?.value.trim() || "社区后台测试提醒";
    const message = qs("communityAdminTestMessage")?.value.trim() || "这是一条来自社区后台的测试提醒。";
    try {
        await apiRequest(`Admin/send-test/${targetUserId}?title=${encodeURIComponent(title)}&messaeg=${encodeURIComponent(message)}`, {
            method: "POST"
        });
        showNotification("测试提醒已发送", "success");
    } catch (error) {
        showNotification(error.message || "发送测试提醒失败", "error");
    }
}

function renderCommunityManageCategories() {
    if (!getCommunityCanManage()) {
        qs("communityManageCategories").innerHTML = renderEmpty("当前账号没有分类管理权限");
        return;
    }
    const categories = state.community.bootstrap?.management?.categories || [];
    qs("communityManageCategories").innerHTML = categories.length ? categories.map((item) => `
        <article class="post-item">
            <div class="post-item-head">
                <div>
                    <h3>${escapeHtml(item.name || "未命名分类")}</h3>
                    <div class="meta-row">
                        <span>${escapeHtml(item.slug || "-")}</span>
                        <span>排序 ${Number(item.sortOrder || 0)}</span>
                        <span>帖子 ${Number(item.postCount || 0)}</span>
                    </div>
                </div>
                <div class="tag-row">
                    <span class="tag">${escapeHtml(item.accentColor || "#2563EB")}</span>
                    ${item.isEnabled === false ? '<span class="tag danger">停用</span>' : '<span class="tag success">启用</span>'}
                </div>
            </div>
            <div class="action-row">
                <button type="button" class="btn btn-secondary" onclick="editCommunityCategory(${item.id})">编辑</button>
                <button type="button" class="btn btn-ghost" onclick="deleteCommunityCategory(${item.id})">删除</button>
            </div>
        </article>
    `).join("") : renderEmpty("暂无分类");
}

function resetCommunityCategoryForm() {
    qs("communityCategoryId").value = "";
    qs("communityCategoryName").value = "";
    qs("communityCategorySlug").value = "";
    qs("communityCategoryColor").value = "#2563EB";
    qs("communityCategorySort").value = "0";
    qs("communityCategoryEnabled").checked = true;
}

function editCommunityCategory(id) {
    const category = (state.community.bootstrap?.management?.categories || []).find((item) => Number(item.id) === Number(id));
    if (!category) return;
    qs("communityCategoryId").value = category.id;
    qs("communityCategoryName").value = category.name || "";
    qs("communityCategorySlug").value = category.slug || "";
    qs("communityCategoryColor").value = category.accentColor || "#2563EB";
    qs("communityCategorySort").value = String(category.sortOrder || 0);
    qs("communityCategoryEnabled").checked = category.isEnabled !== false;
    state.community.tab = "categories";
    renderCommunityTabs();
}

async function handleSaveCommunityCategory() {
    const id = qs("communityCategoryId").value;
    const name = qs("communityCategoryName").value.trim();
    const slug = (qs("communityCategorySlug").value.trim() || name).toLowerCase().replace(/\s+/g, "-");
    if (!name) {
        showNotification("请输入分类名称", "warning");
        return;
    }
    try {
        await apiRequest(id ? `community/categories/${id}` : "community/categories", {
            method: id ? "PUT" : "POST",
            body: {
                name,
                slug,
                accentColor: qs("communityCategoryColor").value.trim() || "#2563EB",
                sortOrder: Number(qs("communityCategorySort").value || 0),
                isEnabled: qs("communityCategoryEnabled").checked
            }
        });
        showNotification(id ? "分类已更新" : "分类已创建", "success");
        resetCommunityCategoryForm();
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "保存分类失败", "error");
    }
}

async function deleteCommunityCategory(id) {
    if (!window.confirm("确定删除这个分类吗？")) return;
    try {
        await apiRequest(`community/categories/${id}`, { method: "DELETE" });
        showNotification("分类已删除", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "删除分类失败", "error");
    }
}

async function toggleCommunityLike(id) {
    try {
        await apiRequest(`community/posts/${id}/like`, { method: "POST" });
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "点赞失败", "error");
    }
}

async function toggleCommunityFavorite(id) {
    try {
        await apiRequest(`community/posts/${id}/favorite`, { method: "POST" });
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "收藏失败", "error");
    }
}

function renderCommunityCommentList(post) {
    const comments = Array.isArray(post.comments) ? post.comments : [];
    if (!comments.length) {
        return renderEmpty("暂无评论");
    }

    const editingCommentId = Number(state.community.detail.editingCommentId || 0);
    const deletingCommentId = Number(state.community.detail.deletingCommentId || 0);

    return comments.map((comment) => {
        const isEditing = editingCommentId === Number(comment.id);
        const isDeleting = deletingCommentId === Number(comment.id);
        const content = isEditing
            ? String(state.community.detail.editingCommentContent ?? comment.content ?? "")
            : String(comment.content || "");
        const actionMarkup = isEditing
            ? `
                <button type="button" class="btn btn-secondary" onclick="event.stopPropagation(); saveCommunityCommentEdit(${post.id}, ${comment.id})">确定</button>
                <button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); cancelCommunityCommentEdit()">取消</button>
            `
            : isDeleting
                ? `
                    <button type="button" class="btn btn-secondary" onclick="event.stopPropagation(); confirmCommunityCommentDelete(${post.id}, ${comment.id})">确认删除</button>
                    <button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); cancelCommunityCommentDelete()">取消</button>
                `
                : `
                    ${comment.canEdit ? `<button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); editCommunityComment(${post.id}, ${comment.id})">编辑</button>` : ""}
                    ${comment.canDelete ? `<button type="button" class="btn btn-ghost" onclick="event.stopPropagation(); deleteCommunityComment(${post.id}, ${comment.id})">删除</button>` : ""}
                `;

        return `
            <article class="member-item community-comment-item ${isEditing ? "community-comment-item-editing" : ""} ${isDeleting ? "community-comment-item-confirm" : ""}">
                <div class="member-item-head">
                    <div class="entity-head">
                        ${buildUserAvatarMarkup(comment, comment.userName || "匿名用户", "sm")}
                        <div>
                            <strong>${escapeHtml(comment.userName || "匿名用户")}</strong>
                            <div class="meta-row">
                                <span>${escapeHtml(comment.createdAt ? formatDateTime(comment.createdAt) : "刚刚")}</span>
                                ${comment.isCurrentUser ? '<span class="tag">我的评论</span>' : ""}
                            </div>
                        </div>
                    </div>
                    <div class="action-row">
                        ${actionMarkup}
                    </div>
                </div>
                ${isEditing
                    ? `
                        <div class="community-comment-editor-shell">
                            <textarea id="communityCommentEditor_${comment.id}" data-community-comment-editor="${comment.id}" class="input textarea community-comment-editor" rows="4" oninput="updateCommunityCommentDraft(this.value)">${escapeHtml(content)}</textarea>
                        </div>
                    `
                    : `<p class="community-comment-content">${escapeHtml(content)}</p>`}
                ${isDeleting ? '<div class="community-comment-inline-tip">确认删除这条评论后将无法恢复。</div>' : ""}
            </article>
        `;
    }).join("");
}

function openCommunityPostDetail(id) {
    state.community.detail.currentPostId = Number(id) || null;
    resetCommunityCommentInteractionState();
    if (!getActiveCommunityDetailPost()) {
        resetCommunityDetailState();
        return;
    }
    renderCommunityPostDetail();
    openModal("communityDetailModal");
}

function renderCommunityPostDetail() {
    const post = getActiveCommunityDetailPost();
    if (!post) {
        closeModal("communityDetailModal");
        return;
    }

    qs("communityDetailTitle").textContent = post.title || "帖子详情";
    qs("communityDetailContent").innerHTML = `
        <div class="tag-row">
            <span class="tag">${escapeHtml(post.categoryName || "未分类")}</span>
            <span class="tag">${escapeHtml(post.authorName || "未知作者")}</span>
            <span class="tag">${escapeHtml(post.publishedAt ? formatDateTime(post.publishedAt) : "未发布")}</span>
            <span class="tag">评论 ${Number(post.commentCount || 0)}</span>
        </div>
        <div>${sanitizeHtml(post.content || "")}</div>
        <div class="action-row">
            <button type="button" class="btn btn-secondary" onclick="toggleCommunityLike(${post.id})">点赞 ${Number(post.likeCount || 0)}</button>
            <button type="button" class="btn btn-secondary" onclick="toggleCommunityFavorite(${post.id})">收藏 ${Number(post.favoriteCount || 0)}</button>
            ${post.canEdit ? `<button type="button" class="btn btn-ghost" onclick="editCommunityPost(${post.id})">编辑帖子</button>` : ""}
            ${post.canDelete ? `<button type="button" class="btn btn-ghost" onclick="deleteCommunityPost(${post.id})">删除帖子</button>` : ""}
        </div>
        <div class="stack-form">
            <h4>评论区</h4>
            ${renderCommunityCommentList(post)}
            <div class="form-field">
                <label for="communityCommentInput">新增评论</label>
                <textarea id="communityCommentInput" class="input textarea" rows="3"></textarea>
            </div>
            <button type="button" class="btn btn-primary" onclick="submitCommunityComment(${post.id})">提交评论</button>
        </div>
    `;
}

async function submitCommunityComment(postId) {
    const content = qs("communityCommentInput").value.trim();
    if (!content) {
        showNotification("请输入评论内容", "warning");
        return;
    }
    try {
        await apiRequest(`community/posts/${postId}/comments`, {
            method: "POST",
            body: { content }
        });
        resetCommunityCommentInteractionState();
        showNotification("评论已提交", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "提交评论失败", "error");
    }
}

function focusCommunityCommentEditor(commentId) {
    const editor = document.querySelector(`[data-community-comment-editor="${commentId}"]`);
    if (!editor) {
        return;
    }

    editor.focus();
    if (typeof editor.setSelectionRange === "function") {
        const cursor = editor.value.length;
        editor.setSelectionRange(cursor, cursor);
    }
}

function updateCommunityCommentDraft(value) {
    state.community.detail.editingCommentContent = String(value ?? "");
}

function editCommunityComment(postId, commentId) {
    const post = getCommunityPostById(postId);
    const comment = post?.comments?.find((item) => Number(item.id) === Number(commentId));
    if (!comment) return;

    state.community.detail.currentPostId = Number(postId) || null;
    state.community.detail.deletingCommentId = null;
    state.community.detail.editingCommentId = Number(commentId);
    state.community.detail.editingCommentContent = String(comment.content || "");
    renderCommunityPostDetail();
    window.setTimeout(() => focusCommunityCommentEditor(commentId), 0);
}

function cancelCommunityCommentEdit() {
    state.community.detail.editingCommentId = null;
    state.community.detail.editingCommentContent = "";
    renderCommunityPostDetail();
}

async function saveCommunityCommentEdit(postId, commentId) {
    const content = String(state.community.detail.editingCommentContent || "").trim();
    if (!content) {
        showNotification("评论内容不能为空", "warning");
        return;
    }

    try {
        await apiRequest(`community/posts/${postId}/comments/${commentId}`, {
            method: "PUT",
            body: { content }
        });
        resetCommunityCommentInteractionState();
        showNotification("评论已更新", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "更新评论失败", "error");
    }
}

function deleteCommunityComment(postId, commentId) {
    state.community.detail.currentPostId = Number(postId) || null;
    state.community.detail.editingCommentId = null;
    state.community.detail.editingCommentContent = "";
    state.community.detail.deletingCommentId = Number(commentId);
    renderCommunityPostDetail();
}

function cancelCommunityCommentDelete() {
    state.community.detail.deletingCommentId = null;
    renderCommunityPostDetail();
}

async function confirmCommunityCommentDelete(postId, commentId) {
    try {
        await apiRequest(`community/posts/${postId}/comments/${commentId}`, { method: "DELETE" });
        resetCommunityCommentInteractionState();
        showNotification("评论已删除", "success");
        await loadCommunityBootstrap();
    } catch (error) {
        showNotification(error.message || "删除评论失败", "error");
    }
}

function bindProfileEvents() {
    document.querySelectorAll("[data-profile-tab]").forEach((button) => {
        button.addEventListener("click", () => {
            state.profile.tab = button.dataset.profileTab;
            renderProfileTabs();
        });
    });
    qs("profileForm").addEventListener("submit", handleSaveProfile);
    qs("settingsForm").addEventListener("submit", handleSaveSettings);
    qs("channelForm").addEventListener("submit", handleSaveChannel);
    qs("channelType").addEventListener("change", syncChannelModalSelection);
    qs("channelEnabled").addEventListener("change", () => {
        renderChannelRows([
            ...snapshotChannelFieldEntries(),
            ...state.profile.editingChannelRows.map((item) => [item.key, item.value])
        ]);
    });
    qs("forwardTestForm").addEventListener("submit", handleForwardTest);
    [
        ["appForwardingEnabled", "enabled"],
        ["appForwardingAutoDismiss", "autoDismissNotifications"],
        ["appForwardingOnlyLocked", "onlyWhenLocked"],
        ["appForwardSmsOnly", "onlyForwardSmsApplications"],
        ["appForwardSelectedOnly", "forwardSelectedApplicationsOnly"]
    ].forEach(([id, key]) => {
        qs(id).addEventListener("change", (event) => updateAppForwardingToggle(key, event.target.checked));
    });
    qs("addForwardPackageBtn").addEventListener("click", addAppForwardingPackage);
    qs("clearForwardPackagesBtn").addEventListener("click", clearAppForwardingPackages);
    qs("profileCopyInviteBtn").addEventListener("click", async () => {
        const inviteCode = state.redemption.summary?.inviteCode || getCurrentUserProfile().inviteCode || "";
        if (!inviteCode) {
            showNotification("当前还没有可复制的邀请码", "warning");
            return;
        }
        const copied = await copyTextToClipboard(inviteCode);
        showNotification(copied ? `邀请码已复制：${inviteCode}` : "复制邀请码失败，请手动复制", copied ? "success" : "error");
    });
    qs("profileOpenRedemptionBtn").addEventListener("click", () => setActiveModule("redemption"));
}

async function loadProfileInfo() {
    try {
        const payload = await apiRequest("User/info");
        state.profile.info = normalizeUser(payload || {});
        state.currentUser = state.profile.info;
        saveJson("currentUser", state.currentUser);
        updateHeaderUserBadges();
        invalidateQuotaSummary();
        renderProfile();
        renderPlans();
    } catch (error) {
        console.error(error);
    }
}

async function loadUserSettings() {
    try {
        const payload = await apiRequest("User/settings");
        state.profile.settings = normalizeUserSettings(payload || {});
        renderProfile();
    } catch (error) {
        console.error(error);
    }
}

function renderProfileTabs() {
    const availableTabs = ["basic", "channels"];
    if (!availableTabs.includes(state.profile.tab)) {
        state.profile.tab = "basic";
    }
    document.querySelectorAll("[data-profile-tab]").forEach((button) => {
        button.classList.toggle("active", button.dataset.profileTab === state.profile.tab);
    });
    ["basic", "settings", "channels"].forEach((tab) => {
        qs(`profileTab${tab.charAt(0).toUpperCase()}${tab.slice(1)}`).classList.toggle("active", tab !== "settings" && state.profile.tab === tab);
    });
}

function renderProfile() {
    renderProfileTabs();
    const user = getCurrentUserProfile();
    const settings = state.profile.settings || normalizeUserSettings({});
    qs("profileSummary").innerHTML = `
        <div class="stat-card"><span>用户</span><strong>${escapeHtml(user.displayName || user.userName || "-")}</strong></div>
        <div class="stat-card"><span>身份</span><strong>${user.isAdmin ? "管理员" : "普通用户"}</strong></div>
        <div class="stat-card"><span>订阅</span><strong>${user.isPro ? "Pro 会员" : "未订阅"}</strong></div>
        <div class="stat-card"><span>到期时间</span><strong>${escapeHtml(user.proExpireAtUtc ? formatDate(user.proExpireAtUtc) : "-")}</strong></div>
    `;
    qs("profileUserName").value = user.userName || "";
    qs("profileDisplayName").value = user.displayName || "";
    qs("profileEmail").value = user.email || "";
    qs("profileAvatarUrl").value = user.avatarUrl || "";
    qs("profileInviteCode").textContent = user.inviteCode || "--";
    qs("profilePointBalance").textContent = String(user.proExchangePointBalance || 0);
    qs("settingsDefaultRemindInterval").value = String(settings.defaultRemindInterval || 0);
    qs("settingsTheme").value = settings.theme || "";
    qs("settingsLanguage").value = state.ui.language || settings.language || "zh-CN";
    qs("settingsWxWebhook").value = settings.wxWebhook || "";
    qs("settingsEnableEmailNotify").checked = !!settings.enableEmailNotify;
    qs("settingsEnablePushNotify").checked = !!settings.enablePushNotify;
    qs("settingsNotifySound").checked = !!settings.notifySound;
    qs("settingsAppLight").checked = !!settings.appLight;
    renderAppForwardingPanel();
    renderChannelList();
}

function applyRedemptionSummary(summary) {
    const normalized = normalizeRedemptionSummary(summary || {});
    state.redemption.summary = normalized;
    state.currentUser = normalized.user;
    state.profile.info = normalized.user;
    saveJson("currentUser", state.currentUser);
    invalidateQuotaSummary();
    updateHeaderUserBadges();
    renderProfile();
    renderPlans();
    return normalized;
}

async function loadRedemptionCenter(showError = true) {
    try {
        const payload = await apiRequest("Redemption/center");
        const summary = applyRedemptionSummary(payload || {});
        if (summary.user.isAdmin) {
            await loadRedemptionAdminTags(false);
            await loadRedemptionAdminCodes(showError);
        } else {
            state.redemption.adminCodes = [];
            state.redemption.adminTag = "";
            state.redemption.adminTags = [];
            state.redemption.lastGeneratedCodes = [];
        }
        renderRedemption();
        return summary;
    } catch (error) {
        if (showError) {
            showNotification(error.message || "获取兑换中心失败", "error");
        }
        renderRedemption();
        return null;
    }
}

async function loadRedemptionAdminTags(showError = false) {
    const user = state.redemption.summary?.user || getCurrentUserProfile();
    if (!user.isAdmin) {
        state.redemption.adminTag = "";
        state.redemption.adminTags = [];
        return [];
    }

    try {
        const payload = await apiRequest("Redemption/admin/codes/tags");
        const tags = (Array.isArray(payload) ? payload : [])
            .map((item) => String(item || "").trim())
            .filter(Boolean)
            .filter((item, index, source) => source.findIndex((value) => value.toLowerCase() === item.toLowerCase()) === index)
            .sort((left, right) => left.localeCompare(right, "zh-CN"));
        state.redemption.adminTags = tags;
        if (state.redemption.adminTag && !tags.some((item) => item === state.redemption.adminTag)) {
            state.redemption.adminTag = "";
        }
        return tags;
    } catch (error) {
        if (showError) {
            showNotification(error.message || "获取兑换码标签失败", "error");
        }
        return state.redemption.adminTags;
    }
}

function getRedemptionAdminFilterValue() {
    if (state.redemption.adminFilter === "used") {
        return true;
    }
    if (state.redemption.adminFilter === "unused") {
        return false;
    }
    return null;
}

function buildRedemptionAdminFilterPayload() {
    return {
        isUsed: getRedemptionAdminFilterValue(),
        tag: state.redemption.adminTag || null,
        keyword: state.redemption.adminKeyword || null
    };
}

function getRedemptionAdminFilterDescription() {
    const filterLabel = state.redemption.adminFilter === "used"
        ? "已使用"
        : state.redemption.adminFilter === "unused"
            ? "未使用"
            : "全部";
    const detailParts = [];
    if (state.redemption.adminTag) {
        detailParts.push(`标签：${state.redemption.adminTag}`);
    }
    if (state.redemption.adminKeyword) {
        detailParts.push(`关键词：${state.redemption.adminKeyword}`);
    }
    return detailParts.length ? `${filterLabel}，${detailParts.join("，")}` : filterLabel;
}

function doesRedemptionCodeMatchAdminFilter(item) {
    if (!item || typeof item !== "object") {
        return false;
    }

    const isUsed = getRedemptionAdminFilterValue();
    if (isUsed !== null && Boolean(item.isUsed) !== isUsed) {
        return false;
    }

    const tag = String(state.redemption.adminTag || "").trim();
    if (tag && String(item.tag || "").trim() !== tag) {
        return false;
    }

    const keyword = String(state.redemption.adminKeyword || "").trim().toLowerCase();
    if (!keyword) {
        return true;
    }

    return [item.code, item.tag, item.description]
        .filter((value) => value != null)
        .some((value) => String(value).toLowerCase().includes(keyword));
}

async function loadRedemptionAdminCodes(showError = false) {
    const user = state.redemption.summary?.user || getCurrentUserProfile();
    if (!user.isAdmin) {
        state.redemption.adminCodes = [];
        renderRedemptionAdminCodes();
        return [];
    }

    try {
        const params = new URLSearchParams({
            pageIndex: "1",
            pageSize: "50"
        });
        const isUsed = getRedemptionAdminFilterValue();
        if (isUsed !== null) {
            params.set("isUsed", isUsed ? "true" : "false");
        }
        if (state.redemption.adminTag) {
            params.set("tag", state.redemption.adminTag);
        }
        if (state.redemption.adminKeyword) {
            params.set("keyword", state.redemption.adminKeyword);
        }
        const payload = await apiRequest(`Redemption/admin/codes?${params.toString()}`);
        const page = normalizeRedemptionAdminPage(payload || {});
        state.redemption.adminCodes = page.items;
        renderRedemptionAdminCodes();
        return page.items;
    } catch (error) {
        if (showError) {
            showNotification(error.message || "获取兑换码列表失败", "error");
        }
        renderRedemptionAdminCodes();
        return state.redemption.adminCodes;
    }
}

function renderRedemption() {
    const fallbackUser = getCurrentUserProfile();
    const summary = state.redemption.summary;
    const user = summary?.user || fallbackUser;
    const inviteCode = summary?.inviteCode || user.inviteCode || "--";
    const pointBalance = Number(summary?.pointBalance ?? user.proExchangePointBalance ?? 0);
    const invitedUserCount = Number(summary?.invitedUserCount ?? 0);
    const usedCodeCount = Number(summary?.usedCodeCount ?? 0);
    const expireAt = user.proExpireAtUtc ? formatDate(user.proExpireAtUtc) : "-";

    qs("redemptionSummary").innerHTML = `
        <div class="stat-card">
            <span>当前兑换点</span>
            <strong>${pointBalance}</strong>
        </div>
        <div class="stat-card">
            <span>已邀请好友</span>
            <strong>${invitedUserCount}</strong>
        </div>
        <div class="stat-card">
            <span>已使用兑换码</span>
            <strong>${usedCodeCount}</strong>
        </div>
        <div class="stat-card">
            <span>Pro 到期时间</span>
            <strong>${escapeHtml(expireAt)}</strong>
        </div>
    `;

    qs("redemptionInviteCode").textContent = inviteCode;
    qs("redemptionInviteCountTag").textContent = `已邀请 ${invitedUserCount} 人`;
    qs("redemptionUsedCodeTag").textContent = `已使用 ${usedCodeCount} 个兑换码`;

    const options = (summary?.redemptionOptions || [])
        .slice()
        .sort((left, right) => left.days - right.days);
    qs("redemptionOptions").innerHTML = options.length
        ? options.map((option) => {
            const disabled = pointBalance < option.costPoints;
            return `
                <article class="plan-card redemption-option-card">
                    <div class="tag-row">
                        <span class="tag ${disabled ? "" : "success"}">${escapeHtml(String(option.days))} 天</span>
                        <span class="tag">消耗 ${escapeHtml(String(option.costPoints))} 点</span>
                    </div>
                    <strong>${escapeHtml(option.title || `${option.days} 天 Pro`)}</strong>
                    <p>${escapeHtml(option.description || `使用 ${option.costPoints} 个兑换点兑换 ${option.days} 天 Pro 权限。`)}</p>
                    <button type="button" class="btn btn-primary" data-redemption-exchange="${option.days}" ${disabled ? "disabled" : ""}>
                        兑换 ${escapeHtml(String(option.days))} 天
                    </button>
                </article>
            `;
        }).join("")
        : renderEmpty("当前没有可用的 Pro 兑换方案");

    qs("redemptionGeneratedCodesPanel").classList.toggle("hidden", state.redemption.lastGeneratedCodes.length === 0);
    qs("redemptionGeneratedCodes").innerHTML = state.redemption.lastGeneratedCodes.length
        ? state.redemption.lastGeneratedCodes.map((item) => `
            <article class="generated-code-item">
                <div class="generated-code-main">
                    <strong class="generated-code-code">${escapeHtml(item.code)}</strong>
                    <div class="tag-row">
                        <span class="tag success">${escapeHtml(String(item.points))} 天额度</span>
                        ${item.tag ? `<span class="tag">${escapeHtml(item.tag)}</span>` : ""}
                    </div>
                    <p>${escapeHtml(item.description || "新生成的兑换码，可直接分发给用户使用。")}</p>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-secondary" data-copy-text="${escapeHtml(item.code)}">复制</button>
                    <button type="button" class="btn btn-ghost" data-delete-redemption-code="${item.id}">删除</button>
                </div>
            </article>
        `).join("")
        : "";

    qs("redemptionAdminCard").classList.toggle("hidden", !user.isAdmin);
    qs("redemptionAdminTagFilter").innerHTML = [
        `<option value="">全部标签</option>`,
        ...state.redemption.adminTags.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`)
    ].join("");
    qs("redemptionAdminTagFilter").value = state.redemption.adminTag || "";
    qs("redemptionAdminKeyword").value = state.redemption.adminKeyword || "";
    document.querySelectorAll("[data-redemption-filter]").forEach((button) => {
        button.classList.toggle("active", button.dataset.redemptionFilter === state.redemption.adminFilter);
    });
    qs("redemptionAdminBatchDeleteBtn").disabled = state.redemption.adminCodes.length === 0;
    renderRedemptionAdminCodes();
}

function renderRedemptionAdminCodes() {
    const user = state.redemption.summary?.user || getCurrentUserProfile();
    if (!user.isAdmin) {
        qs("redemptionAdminList").innerHTML = "";
        return;
    }

    qs("redemptionAdminList").innerHTML = state.redemption.adminCodes.length
        ? state.redemption.adminCodes.map((item) => `
            <article class="generated-code-item">
                <div class="generated-code-main">
                    <strong class="generated-code-code">${escapeHtml(item.code)}</strong>
                    <div class="tag-row">
                        <span class="tag ${item.isUsed ? "danger" : "success"}">${item.isUsed ? "已使用" : "未使用"}</span>
                        <span class="tag">${escapeHtml(String(item.points))} 天额度</span>
                        ${item.tag ? `<span class="tag">${escapeHtml(item.tag)}</span>` : ""}
                    </div>
                    <p>${escapeHtml(item.description || "暂无描述")}</p>
                    <p>创建时间：${escapeHtml(formatDateTime(item.createdAt))}</p>
                    <p>${item.isUsed
                        ? `使用信息：${escapeHtml(item.usedByUserName || "未知用户")} · ${escapeHtml(formatDateTime(item.usedAt))}`
                        : "使用信息：尚未使用"}</p>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-secondary" data-copy-text="${escapeHtml(item.code)}">复制</button>
                    <button type="button" class="btn btn-ghost" data-delete-redemption-code="${item.id}">删除</button>
                </div>
            </article>
        `).join("")
        : renderEmpty("当前筛选条件下没有匹配的兑换码");
}

async function exchangeRedemptionOption(days) {
    const normalizedDays = Number(days || 0);
    if (![1, 7, 30].includes(normalizedDays)) {
        showNotification("仅支持兑换 1 天、7 天或 30 天 Pro 权限", "warning");
        return;
    }

    try {
        const payload = await apiRequest("Redemption/exchange-pro", {
            method: "POST",
            body: { days: normalizedDays }
        });
        applyRedemptionSummary(payload || {});
        renderRedemption();
        showNotification(`已成功兑换 ${normalizedDays} 天 Pro 权限`, "success");
    } catch (error) {
        showNotification(error.message || "兑换 Pro 权限失败", "error");
    }
}

async function handleRedeemCodeSubmit(event) {
    event.preventDefault();
    const code = qs("redemptionCodeInput").value.trim();
    if (!code) {
        showNotification("请输入兑换码", "warning");
        qs("redemptionCodeInput").focus();
        return;
    }

    try {
        const payload = await apiRequest("Redemption/redeem-code", {
            method: "POST",
            body: { code }
        });
        qs("redemptionCodeInput").value = "";
        applyRedemptionSummary(payload || {});
        renderRedemption();
        showNotification("兑换码充值成功", "success");
    } catch (error) {
        showNotification(error.message || "兑换码充值失败", "error");
    }
}

async function handleRedemptionAdminGenerate(event) {
    event.preventDefault();
    const user = state.redemption.summary?.user || getCurrentUserProfile();
    if (!user.isAdmin) {
        showNotification("仅管理员可生成兑换码", "warning");
        return;
    }

    const count = Number(qs("redemptionAdminCount").value || 0);
    const points = Number(qs("redemptionAdminPoints").value || 0);
    if (!Number.isInteger(count) || count <= 0 || count > 500) {
        showNotification("生成数量必须是 1 到 500 之间的整数", "warning");
        qs("redemptionAdminCount").focus();
        return;
    }
    if (!Number.isInteger(points) || points <= 0) {
        showNotification("请选择有效的兑换天数", "warning");
        qs("redemptionAdminPoints").focus();
        return;
    }

    try {
        const payload = await apiRequest("Redemption/admin/codes/generate", {
            method: "POST",
            body: {
                count,
                points,
                tag: qs("redemptionAdminTag").value.trim() || null,
                description: qs("redemptionAdminDescription").value.trim() || null
            }
        });
        state.redemption.lastGeneratedCodes = unwrapCollection(payload?.codes).map(normalizeRedemptionCodeAdmin);
        await loadRedemptionAdminTags(false);
        await loadRedemptionAdminCodes(false);
        renderRedemption();
        showNotification(`已生成 ${count} 个兑换码`, "success");
    } catch (error) {
        showNotification(error.message || "生成兑换码失败", "error");
    }
}

async function deleteRedemptionCode(codeId) {
    const normalizedId = Number(codeId || 0);
    if (!Number.isInteger(normalizedId) || normalizedId <= 0) {
        showNotification("兑换码 ID 无效", "warning");
        return;
    }

    if (!window.confirm("确认删除这个兑换码吗？删除后不可恢复。")) {
        return;
    }

    try {
        await apiRequest(`Redemption/admin/codes/${normalizedId}`, {
            method: "DELETE"
        });
        state.redemption.adminCodes = state.redemption.adminCodes.filter((item) => item.id !== normalizedId);
        state.redemption.lastGeneratedCodes = state.redemption.lastGeneratedCodes.filter((item) => item.id !== normalizedId);
        await loadRedemptionAdminTags(false);
        await loadRedemptionAdminCodes(false);
        renderRedemption();
        showNotification("兑换码已删除", "success");
    } catch (error) {
        showNotification(error.message || "删除兑换码失败", "error");
    }
}

async function batchDeleteRedemptionCodes() {
    const user = state.redemption.summary?.user || getCurrentUserProfile();
    if (!user.isAdmin) {
        showNotification("仅管理员可批量删除兑换码", "warning");
        return;
    }

    if (!state.redemption.adminCodes.length) {
        showNotification("当前筛选条件下没有可删除的兑换码", "warning");
        return;
    }

    if (!window.confirm(`确认删除当前筛选条件下的全部兑换码（${getRedemptionAdminFilterDescription()}）吗？删除后不可恢复。`)) {
        return;
    }

    try {
        const payload = await apiRequest("Redemption/admin/codes/batch-delete", {
            method: "POST",
            body: buildRedemptionAdminFilterPayload()
        });
        state.redemption.lastGeneratedCodes = state.redemption.lastGeneratedCodes.filter((item) => !doesRedemptionCodeMatchAdminFilter(item));
        await loadRedemptionAdminTags(false);
        await loadRedemptionAdminCodes(false);
        renderRedemption();
        const deletedCount = Number(payload?.deletedCount || 0);
        showNotification(deletedCount > 0 ? `已批量删除 ${deletedCount} 个兑换码` : "当前筛选条件下没有可删除的兑换码", deletedCount > 0 ? "success" : "info");
    } catch (error) {
        showNotification(error.message || "批量删除兑换码失败", "error");
    }
}

function bindRedemptionEvents() {
    qs("redemptionRefreshBtn").addEventListener("click", () => loadRedemptionCenter());
    qs("redemptionCopyInviteBtn").addEventListener("click", async () => {
        const inviteCode = state.redemption.summary?.inviteCode || getCurrentUserProfile().inviteCode || "";
        if (!inviteCode) {
            showNotification("当前还没有可复制的邀请码", "warning");
            return;
        }
        const copied = await copyTextToClipboard(inviteCode);
        showNotification(copied ? `邀请码已复制：${inviteCode}` : "复制邀请码失败，请手动复制", copied ? "success" : "error");
    });
    qs("redemptionCodeForm").addEventListener("submit", handleRedeemCodeSubmit);
    qs("redemptionOptions").addEventListener("click", (event) => {
        const button = event.target.closest("[data-redemption-exchange]");
        if (!button) {
            return;
        }
        exchangeRedemptionOption(button.dataset.redemptionExchange);
    });
    qs("redemptionGeneratedCodes").addEventListener("click", async (event) => {
        const deleteButton = event.target.closest("[data-delete-redemption-code]");
        if (deleteButton) {
            await deleteRedemptionCode(deleteButton.dataset.deleteRedemptionCode);
            return;
        }
        const button = event.target.closest("[data-copy-text]");
        if (!button) {
            return;
        }
        const copied = await copyTextToClipboard(button.dataset.copyText || "");
        showNotification(copied ? "兑换码已复制" : "复制兑换码失败，请手动复制", copied ? "success" : "error");
    });
    qs("redemptionAdminGenerateForm").addEventListener("submit", handleRedemptionAdminGenerate);
    qs("redemptionAdminFilters").addEventListener("click", async (event) => {
        const button = event.target.closest("[data-redemption-filter]");
        if (!button) {
            return;
        }
        state.redemption.adminFilter = button.dataset.redemptionFilter || "all";
        await loadRedemptionAdminCodes(true);
        renderRedemption();
    });
    qs("redemptionAdminSearchBtn").addEventListener("click", async () => {
        state.redemption.adminTag = qs("redemptionAdminTagFilter").value.trim();
        state.redemption.adminKeyword = qs("redemptionAdminKeyword").value.trim();
        await loadRedemptionAdminCodes(true);
        renderRedemption();
    });
    qs("redemptionAdminBatchDeleteBtn").addEventListener("click", batchDeleteRedemptionCodes);
    qs("redemptionAdminTagFilter").addEventListener("change", async (event) => {
        state.redemption.adminTag = String(event.target.value || "").trim();
        await loadRedemptionAdminCodes(true);
        renderRedemption();
    });
    qs("redemptionAdminKeyword").addEventListener("keydown", async (event) => {
        if (event.key !== "Enter") {
            return;
        }
        event.preventDefault();
        state.redemption.adminTag = qs("redemptionAdminTagFilter").value.trim();
        state.redemption.adminKeyword = qs("redemptionAdminKeyword").value.trim();
        await loadRedemptionAdminCodes(true);
        renderRedemption();
    });
    qs("redemptionAdminList").addEventListener("click", async (event) => {
        const deleteButton = event.target.closest("[data-delete-redemption-code]");
        if (deleteButton) {
            await deleteRedemptionCode(deleteButton.dataset.deleteRedemptionCode);
            return;
        }
        const button = event.target.closest("[data-copy-text]");
        if (!button) {
            return;
        }
        const copied = await copyTextToClipboard(button.dataset.copyText || "");
        showNotification(copied ? "兑换码已复制" : "复制兑换码失败，请手动复制", copied ? "success" : "error");
    });
}

function persistAppForwardingSettings() {
    state.profile.appForwarding.selectedApplications = (state.profile.appForwarding.selectedApplications || [])
        .map((item) => ({
            appName: String(item.appName || "").trim(),
            packageName: String(item.packageName || "").trim()
        }))
        .filter((item) => item.packageName);
    state.profile.appForwarding.selectedApplicationPackages = state.profile.appForwarding.selectedApplications
        .map((item) => item.packageName)
        .filter(Boolean);
    saveJson(APP_FORWARDING_STORAGE_KEY, state.profile.appForwarding);
}

function buildAppForwardingSummary() {
    const settings = state.profile.appForwarding;
    if (!settings.enabled) {
        return "未启用";
    }
    if (settings.onlyForwardSmsApplications) {
        return "仅转发短信广播";
    }
    if (settings.forwardSelectedApplicationsOnly) {
        return `仅转发指定应用（${settings.selectedApplications.length} 个）`;
    }
    return "转发全部应用通知";
}

function renderAppForwardingPanel() {
    const settings = state.profile.appForwarding;
    qs("appForwardingEnabled").checked = !!settings.enabled;
    qs("appForwardingAutoDismiss").checked = !!settings.autoDismissNotifications;
    qs("appForwardingOnlyLocked").checked = !!settings.onlyWhenLocked;
    qs("appForwardSmsOnly").checked = !!settings.onlyForwardSmsApplications;
    qs("appForwardSelectedOnly").checked = !!settings.forwardSelectedApplicationsOnly;
    qs("appForwardingSummary").textContent = buildAppForwardingSummary();
    ["appForwardingAutoDismiss", "appForwardingOnlyLocked", "appForwardSmsOnly", "appForwardSelectedOnly"].forEach((id) => {
        qs(id).disabled = !settings.enabled;
    });

    const section = qs("appForwardingPackagesSection");
    section.classList.toggle("hidden", !settings.forwardSelectedApplicationsOnly);
    const packageControlsEnabled = !!settings.enabled && !!settings.forwardSelectedApplicationsOnly;
    const items = settings.selectedApplications || [];
    qs("appForwardAppName").disabled = !packageControlsEnabled;
    qs("appForwardPackageName").disabled = !packageControlsEnabled;
    qs("addForwardPackageBtn").disabled = !packageControlsEnabled;
    qs("clearForwardPackagesBtn").disabled = !packageControlsEnabled || !items.length;

    qs("appForwardingPackageList").innerHTML = items.length ? items.map((item) => `
        <article class="forward-package-item">
            <div>
                <strong>${escapeHtml(item.appName || item.packageName)}</strong>
                <p>${escapeHtml(item.packageName)}</p>
            </div>
            <button type="button" class="btn btn-ghost" onclick="removeAppForwardingPackage(decodeURIComponent('${encodeURIComponent(item.packageName)}'))">删除</button>
        </article>
    `).join("") : renderEmpty("暂无已选择的应用");
}

function updateAppForwardingToggle(key, value) {
    state.profile.appForwarding[key] = value;
    if (key === "onlyForwardSmsApplications" && value) {
        state.profile.appForwarding.forwardSelectedApplicationsOnly = false;
    }
    if (key === "forwardSelectedApplicationsOnly" && value) {
        state.profile.appForwarding.onlyForwardSmsApplications = false;
    }
    persistAppForwardingSettings();
    renderAppForwardingPanel();
}

function addAppForwardingPackage() {
    if (!state.profile.appForwarding.enabled || !state.profile.appForwarding.forwardSelectedApplicationsOnly) {
        showNotification("请先启用应用转发，并切换为仅转发指定应用", "warning");
        return;
    }
    const packageName = qs("appForwardPackageName").value.trim();
    const appName = qs("appForwardAppName").value.trim();
    if (!packageName) {
        showNotification("请输入应用包名", "warning");
        return;
    }

    const existing = (state.profile.appForwarding.selectedApplications || [])
        .find((item) => item.packageName.toLowerCase() === packageName.toLowerCase());
    if (existing) {
        existing.appName = appName || existing.appName;
    } else {
        state.profile.appForwarding.selectedApplications.push({ appName, packageName });
    }

    qs("appForwardAppName").value = "";
    qs("appForwardPackageName").value = "";
    persistAppForwardingSettings();
    renderAppForwardingPanel();
}

function removeAppForwardingPackage(packageName) {
    state.profile.appForwarding.selectedApplications = (state.profile.appForwarding.selectedApplications || [])
        .filter((item) => String(item.packageName || "").toLowerCase() !== String(packageName || "").toLowerCase());
    persistAppForwardingSettings();
    renderAppForwardingPanel();
}

function clearAppForwardingPackages() {
    state.profile.appForwarding.selectedApplications = [];
    persistAppForwardingSettings();
    renderAppForwardingPanel();
}

async function handleSaveProfile(event) {
    event.preventDefault();
    try {
        await apiRequest("User/info", {
            method: "PUT",
            body: {
                displayName: qs("profileDisplayName").value.trim() || null,
                email: qs("profileEmail").value.trim() || null,
                avatarUrl: qs("profileAvatarUrl").value.trim() || null
            }
        });
        showNotification("个人资料已保存", "success");
        await loadProfileInfo();
    } catch (error) {
        showNotification(error.message || "保存个人资料失败", "error");
    }
}

function collectSettingsPayload() {
    const settings = state.profile.settings || normalizeUserSettings({});
    return {
        ...settings,
        defaultRemindInterval: Number(qs("settingsDefaultRemindInterval").value || 0),
        theme: qs("settingsTheme").value.trim(),
        language: qs("settingsLanguage").value,
        wxWebhook: qs("settingsWxWebhook").value.trim(),
        enableEmailNotify: qs("settingsEnableEmailNotify").checked,
        enablePushNotify: qs("settingsEnablePushNotify").checked,
        notifySound: qs("settingsNotifySound").checked,
        appLight: qs("settingsAppLight").checked
    };
}

async function handleSaveSettings(event) {
    event.preventDefault();
    try {
        const payload = collectSettingsPayload();
        await apiRequest("User/settings", {
            method: "PUT",
            body: payload
        });
        state.profile.settings = normalizeUserSettings(payload);
        setLanguage(payload.language, { persist: true });
        showNotification("偏好设置已保存", "success");
    } catch (error) {
        showNotification(error.message || "保存设置失败", "error");
    }
}
function buildChannelPreview(channel) {
    const definition = getChannelDefinition(channel.type);
    const preview = definition.fields
        .map((field) => ({ field, value: channel.settings?.[field.key] ?? "" }))
        .filter((item) => !["useForAppForwarding", "useForSmsBroadcastForwarding"].includes(item.field.key))
        .filter((item) => item.value != null && item.value !== "" && !(item.field.inputType === "toggle" && item.value === "false"))
        .slice(0, 3)
        .map((item) => `${item.field.label}: ${formatChannelFieldValue(item.field, item.value)}`);
    return preview.length
        ? preview
        : Object.keys(channel.settings || {})
            .filter((key) => !["useForAppForwarding", "useForSmsBroadcastForwarding"].includes(key))
            .slice(0, 3)
            .map((key) => `${key}: ${truncate(channel.settings?.[key] || "", 28)}`);
}

function getProfileNotificationChannels() {
    return state.profile.settings?.notificationChannels || [];
}

function findChannelIndexByType(type) {
    const normalizedType = String(type || "").trim().toLowerCase();
    return getProfileNotificationChannels().findIndex((channel) => channel.type === normalizedType);
}

function getChannelByType(type) {
    const index = findChannelIndexByType(type);
    return index >= 0 ? getProfileNotificationChannels()[index] : null;
}

function buildChannelTileMarkup(meta) {
    const channel = getChannelByType(meta.type);
    const definition = getChannelDefinition(meta.type);
    const preview = channel ? buildChannelPreview(channel) : [];
    const statusText = channel
        ? (channel.enabled ? "已启用" : "已配置")
        : "未配置";
    const tileStateClass = channel
        ? (channel.enabled ? " is-enabled" : " is-configured")
        : "";
    const metaTags = [];

    if (channel) {
        metaTags.push(`<span class="tag">${Object.keys(channel.settings || {}).length} 个字段</span>`);
    }
    if (definition.clientSideOnly) {
        metaTags.push('<span class="tag">仅客户端</span>');
    }

    return `
        <button type="button" class="channel-launcher-tile${tileStateClass}" onclick="openChannelModalByType('${meta.type}')">
            <span class="channel-launcher-tile-inner">
                ${buildChannelIconMarkup(meta.type, meta.name)}
                <span class="channel-launcher-name">${escapeHtml(meta.name)}</span>
                <span class="channel-launcher-status">
                    <span class="channel-status-dot"></span>
                    <span>${escapeHtml(statusText)}</span>
                </span>
                <span class="channel-launcher-copy">${escapeHtml(definition.description || "配置提醒消息投递方式。")}</span>
                ${preview.length ? `<span class="channel-launcher-preview">${escapeHtml(preview[0])}</span>` : ""}
                ${metaTags.length ? `<span class="channel-launcher-tags">${metaTags.join("")}</span>` : ""}
            </span>
        </button>
    `;
}

function renderChannelFieldInput(field, value) {
    const fieldId = `channelField__${field.key}`;
    const safeValue = escapeHtml(String(value ?? ""));
    const hint = `${field.hint || ""}${field.requiresAppForwarding ? `${field.hint ? " " : ""}需要应用转发能力支持。` : ""}`;

    if (field.inputType === "toggle") {
        return `
            <div class="form-field channel-field-block">
                <label class="switch-row">
                    <input id="${fieldId}" data-channel-field="${field.key}" type="checkbox" ${String(value).toLowerCase() === "true" ? "checked" : ""}>
                    <span>${escapeHtml(field.label)}</span>
                </label>
                ${hint ? `<p class="field-hint">${escapeHtml(hint)}</p>` : ""}
            </div>
        `;
    }

    if (field.inputType === "choice") {
        return `
            <div class="form-field channel-field-block">
                <label for="${fieldId}">${escapeHtml(field.label)}${field.required ? " *" : ""}</label>
                <select id="${fieldId}" class="input" data-channel-field="${field.key}">
                    ${field.options.map((option) => `<option value="${escapeHtml(option.value)}" ${String(option.value) === String(value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
                </select>
                ${hint ? `<p class="field-hint">${escapeHtml(hint)}</p>` : ""}
            </div>
        `;
    }

    if (field.inputType === "multiline") {
        return `
            <div class="form-field channel-field-block">
                <label for="${fieldId}">${escapeHtml(field.label)}${field.required ? " *" : ""}</label>
                <textarea id="${fieldId}" class="input textarea" data-channel-field="${field.key}" rows="4">${safeValue}</textarea>
                ${hint ? `<p class="field-hint">${escapeHtml(hint)}</p>` : ""}
            </div>
        `;
    }

    return `
        <div class="form-field channel-field-block"  >
            <label for="${fieldId}">${escapeHtml(field.label)}${field.required ? " *" : ""}</label>
            <input id="${fieldId}" class="input" data-channel-field="${field.key}" type="${field.inputType === "secret" ? "password" : field.inputType === "number" ? "number" : "text"}" value="${safeValue}">
            ${hint ? `<p class="field-hint">${escapeHtml(hint)}</p>` : ""}
        </div>
    `;
}

function renderChannelList() {
    const channels = getProfileNotificationChannels();
    const enabledCount = channels.filter((channel) => channel.enabled).length;
    const configuredCards = channels.map((channel, index) => {
        const definition = getChannelDefinition(channel.type);
        const typeName = getChannelTypeMeta(channel.type)?.name || channel.type;
        const preview = buildChannelPreview(channel);
        const iconMarkup = buildChannelIconMarkup(channel.type, typeName);
        return `
            <article class="channel-summary-card">
                <div class="channel-item-head">
                    <div class="channel-item-hero">
                        ${iconMarkup}
                        <div>
                            <h3>${escapeHtml(typeName)}</h3>
                            <div class="meta-row">
                                <span>${channel.enabled ? "已启用" : "未启用"}</span>
                                <span>${Object.keys(channel.settings || {}).length} 个字段</span>
                                ${definition.clientSideOnly ? '<span class="tag">仅客户端</span>' : ""}
                            </div>
                        </div>
                    </div>
                    <div class="action-row">
                        <button type="button" class="btn btn-secondary" onclick="openChannelModal(${index})">编辑</button>
                        <button type="button" class="btn btn-ghost" onclick="deleteChannel(${index})">删除</button>
                    </div>
                </div>
                <p>${escapeHtml(definition.description || "自定义通知渠道。")}</p>
                <div class="tag-row channel-preview-list">
                    ${preview.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
                </div>
            </article>
        `;
    }).join("");

    qs("channelList").innerHTML = `
        <div class="channel-picker-shell">
            <div class="channel-picker-hero">
                <div class="channel-picker-copy">
                    <span class="channel-picker-eyebrow">通知渠道</span>
                    <h4>选择一个渠道开始配置</h4>
                       </div>
                <div class="channel-picker-stats">
                    <span class="tag">已配置 ${channels.length} 个</span>
                    <span class="tag">${enabledCount} 个已启用</span>
                </div>
            </div>
            <div class="channel-launcher-grid">
                ${CHANNEL_TYPES.map(buildChannelTileMarkup).join("")}
            </div>
        </div> 
    `;
}

function syncChannelModalSelection() {
    const type = String(qs("channelType").value || CHANNEL_TYPES[0].type).trim().toLowerCase();
    const existingIndex = findChannelIndexByType(type);
    const typeName = getChannelTypeMeta(type)?.name || type;
    const channel = existingIndex >= 0 ? getProfileNotificationChannels()[existingIndex] : null;

    qs("channelIndex").value = String(existingIndex);
    qs("channelModalTitle").textContent = channel ? `编辑渠道 · ${typeName}` : `新增渠道 · ${typeName}`;
    qs("channelEnabled").checked = channel ? !!channel.enabled : true;
    renderChannelRows(channel ? Object.entries(channel.settings || {}) : [], true);
}

function openChannelModal(index = -1, preferredType = "") {
    const channel = index >= 0 ? getProfileNotificationChannels()[index] : null;
    const activeType = String(channel?.type || preferredType || CHANNEL_TYPES[0].type).trim().toLowerCase();
    qs("channelType").innerHTML = CHANNEL_TYPES.map((item) => `<option value="${item.type}">${escapeHtml(item.name)}</option>`).join("");
    qs("channelType").value = activeType;
    syncChannelModalSelection();
    openModal("channelModal");
}

function openChannelModalByType(type) {
    openChannelModal(findChannelIndexByType(type), type);
}

function renderChannelRows(entries, withDefault = false) {
    const type = String(qs("channelType").value || CHANNEL_TYPES[0].type).trim().toLowerCase();
    const definition = getChannelDefinition(type);
    const typeName = getChannelTypeMeta(type)?.name || type;
    const providedSettings = Object.fromEntries(entries || []);
    const mergedSettings = {
        ...buildDefaultChannelSettings(type),
        ...providedSettings
    };
    const knownKeys = new Set(definition.fields.map((field) => field.key));
    const rows = Object.entries(providedSettings).filter(([key]) => !knownKeys.has(key));
    state.profile.editingChannelRows = rows.length ? rows.map(([key, value]) => ({ key, value })) : (withDefault ? [] : state.profile.editingChannelRows);

    qs("channelFields").innerHTML = `
        <div class="detail-panel channel-definition-panel">
            <div class="channel-definition">
                <div class="channel-definition-head">
                    ${buildChannelIconMarkup(type, typeName)}
                    <div>
                        <h4>${escapeHtml(typeName)}</h4>
                        <p class="field-hint">${escapeHtml(definition.description || "自定义通知渠道配置。")}</p>
                        <p class="field-hint">${definition.clientSideOnly ? "这个渠道依赖移动端或桌面客户端能力。" : "这些字段已经和当前通知渠道目录保持对齐。"}</p>
                    </div>
                </div>
                <div class="tag-row">
                    <span class="tag">${definition.fields.length} 个标准字段</span>
                    <span class="tag">${qs("channelEnabled").checked ? "保存后启用" : "保存后停用"}</span>
                    ${definition.clientSideOnly ? '<span class="tag">仅客户端执行</span>' : '<span class="tag">服务端可直接投递</span>'}
                </div>
            </div>
        </div>
        <div class="detail-panel">
            <div class="detail-grid channel-form-grid">
                ${definition.fields.map((field) => renderChannelFieldInput(field, mergedSettings[field.key] ?? "")).join("")}
            </div>
        </div>
        <div class="detail-panel" style="display:none">
            <div class="card-head compact">
                <div>
                    <h4>附加字段</h4>
                    <p>保留未识别或未来扩展的渠道字段，避免保存时丢失。</p>
                </div>
                <div class="action-row">
                    <button type="button" class="btn btn-ghost" onclick="addChannelRow()">新增字段</button>
                </div>
            </div>
            <div class="stack-list">
                ${state.profile.editingChannelRows.length ? state.profile.editingChannelRows.map((row, index) => `
                    <div class="form-grid">
                        <div class="form-field">
                            <label>字段键</label>
                            <input class="input" value="${escapeHtml(row.key)}" oninput="updateChannelRow(${index}, 'key', this.value)">
                        </div>
                        <div class="form-field">
                            <label>字段值</label>
                            <input class="input" value="${escapeHtml(row.value)}" oninput="updateChannelRow(${index}, 'value', this.value)">
                        </div>
                        <div class="form-field">
                            <label>操作</label>
                            <button type="button" class="btn btn-ghost" onclick="removeChannelRow(${index})">删除</button>
                        </div>
                    </div>
                `).join("") : renderEmpty("暂无附加字段")}
            </div>
        </div>
    `;
}

function snapshotChannelFieldEntries() {
    const type = qs("channelType").value || CHANNEL_TYPES[0].type;
    const definition = getChannelDefinition(type);
    return definition.fields.map((field) => {
        const element = qs(`channelField__${field.key}`);
        if (!element) {
            return [field.key, buildDefaultChannelSettings(type)[field.key] ?? ""];
        }
        const value = field.inputType === "toggle"
            ? toToggleString(element.checked)
            : String(element.value ?? "");
        return [field.key, value];
    });
}

function addChannelRow() {
    state.profile.editingChannelRows.push({ key: "", value: "" });
    renderChannelRows([
        ...snapshotChannelFieldEntries(),
        ...state.profile.editingChannelRows.map((item) => [item.key, item.value])
    ]);
}

function updateChannelRow(index, field, value) {
    if (!state.profile.editingChannelRows[index]) return;
    state.profile.editingChannelRows[index][field] = value;
}

function removeChannelRow(index) {
    state.profile.editingChannelRows.splice(index, 1);
    renderChannelRows([
        ...snapshotChannelFieldEntries(),
        ...state.profile.editingChannelRows.map((item) => [item.key, item.value])
    ]);
}

async function handleSaveChannel(event) {
    event.preventDefault();
    const index = Number(qs("channelIndex").value || -1);
    const type = String(qs("channelType").value || "").trim().toLowerCase();
    const definition = getChannelDefinition(type);
    const settings = {};
    const missing = [];

    definition.fields.forEach((field) => {
        const element = qs(`channelField__${field.key}`);
        if (!element) return;
        const value = field.inputType === "toggle"
            ? toToggleString(element.checked)
            : String(element.value ?? "").trim();
        if (field.required && !value) {
            missing.push(field.label);
        }
        settings[field.key] = value;
    });

    state.profile.editingChannelRows.forEach((row) => {
        const key = String(row.key || "").trim();
        if (key) {
            settings[key] = String(row.value || "");
        }
    });

    if (missing.length) {
        showNotification(`请完善这些必填项：${missing.join("、")}`, "warning");
        return;
    }

    const channels = (state.profile.settings?.notificationChannels || []).slice();
    const existingIndexByType = channels.findIndex((channel) => channel.type === type);
    const targetIndex = index >= 0 ? index : existingIndexByType;
    const nextChannel = {
        id: targetIndex >= 0 && channels[targetIndex] ? channels[targetIndex].id : createId(),
        type,
        enabled: qs("channelEnabled").checked,
        settings
    };

    if (targetIndex >= 0) {
        channels[targetIndex] = nextChannel;
    } else {
        channels.push(nextChannel);
    }

    try {
        const payload = collectSettingsPayload();
        payload.notificationChannels = channels;
        await apiRequest("User/settings", {
            method: "PUT",
            body: payload
        });
        state.profile.settings = normalizeUserSettings(payload);
        closeModal("channelModal");
        renderProfile();
        showNotification("渠道设置已保存", "success");
    } catch (error) {
        if (isRestrictedChannelProError(error)) {
            const restrictedTypes = extractRestrictedChannelTypes(error.rawMessage);
            closeModal("channelModal");
            showChannelPrivilegePrompt(restrictedTypes.length ? restrictedTypes : [type]);
            return;
        }
        showNotification(error.message || "保存渠道失败", "error");
    }
}

async function deleteChannel(index) {
    const channels = getProfileNotificationChannels().slice();
    const channel = channels[index];
    if (!channel) {
        return;
    }

    const typeName = getChannelTypeMeta(channel.type)?.name || channel.type;
    if (!window.confirm(`确认删除「${typeName}」渠道配置吗？`)) {
        return;
    }

    channels.splice(index, 1);

    try {
        const payload = collectSettingsPayload();
        payload.notificationChannels = channels;
        await apiRequest("User/settings", {
            method: "PUT",
            body: payload
        });
        state.profile.settings = normalizeUserSettings(payload);
        renderProfile();
        showNotification("渠道已删除", "success");
    } catch (error) {
        showNotification(error.message || "删除渠道失败", "error");
    }
}

async function handleForwardTest(event) {
    event.preventDefault();
    try {
        await apiRequest("User/forward-message", {
            method: "POST",
            body: {
                sourceType: qs("forwardSourceType").value,
                title: qs("forwardTitle").value.trim(),
                description: qs("forwardDescription").value.trim()
            }
        });
        showNotification("测试消息已发送", "success");
    } catch (error) {
        showNotification(error.message || "发送测试消息失败", "error");
    }
}

function getPlanDefinition(planId) {
    return SUBSCRIPTION_PLANS[planId] || null;
}

function saveCurrentPaymentState() {
    if (state.plans.currentPayment) {
        saveJson(CURRENT_PAYMENT_STORAGE_KEY, state.plans.currentPayment);
    } else {
        localStorage.removeItem(CURRENT_PAYMENT_STORAGE_KEY);
    }
}

function clearCurrentPaymentState() {
    state.plans.currentPayment = null;
    saveCurrentPaymentState();
}

function getPaymentChannelDisplayName(channelCode) {
    return channelCode === "wechat" ? "微信支付" : "支付宝";
}

function getPaymentWayCode(channelCode) {
    return channelCode === "wechat" ? EXTERNAL_PAY_WECHAT_WAY : EXTERNAL_PAY_ALIPAY_WAY;
}

function formatMoney(amount) {
    return `¥${Number(amount || 0).toFixed(2)}`;
}

function buildExternalOrderId(externalUserId, planId) {
    const now = new Date();
    const stamp = [
        now.getFullYear(),
        String(now.getMonth() + 1).padStart(2, "0"),
        String(now.getDate()).padStart(2, "0"),
        String(now.getHours()).padStart(2, "0"),
        String(now.getMinutes()).padStart(2, "0"),
        String(now.getSeconds()).padStart(2, "0")
    ].join("");
    return `pro_${planId}_${externalUserId}_${stamp}_${Math.floor(Math.random() * 9000) + 1000}`;
}

async function externalPayRequest(path, options = {}) {
    const { method = "GET", body } = options;
    const init = {
        method,
        headers: {
            Accept: "application/json",
            "X-Api-Key": EXTERNAL_PAY_API_KEY
        }
    };

    if (body != null) {
        init.body = JSON.stringify(body);
        init.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${EXTERNAL_PAY_BASE_URL}${String(path).replace(/^\/+/, "")}`, init);
    const payload = await readJson(response);

    if (!response.ok) {
        throw new Error(extractErrorMessage(payload, `Payment request failed: ${response.status}`));
    }

    if (payload && payload.successful === false) {
        throw new Error(extractErrorMessage(payload, "Payment service returned an error."));
    }

    return normalizePayload(payload || {});
}

function isPaidExternalStatus(value) {
    if (!value) {
        return false;
    }
    const normalized = String(value).trim().toLowerCase();
    return normalized.includes("paid")
        || normalized.includes("success")
        || normalized.includes("succeeded")
        || normalized.includes("finished")
        || normalized.includes("trade_success")
        || normalized.includes("支付成功")
        || normalized.includes("已支付")
        || normalized.includes("已完成");
}

function isClosedExternalStatus(value) {
    if (!value) {
        return false;
    }
    const normalized = String(value).trim().toLowerCase();
    return normalized.includes("closed")
        || normalized.includes("cancel")
        || normalized.includes("expired")
        || normalized.includes("已关闭")
        || normalized.includes("已取消")
        || normalized.includes("已过期");
}

function parseExternalOrderStatus(payload) {
    const normalized = normalizePayload(payload || {});
    const data = normalizePayload(normalized.data || {});
    const orderStatusCandidates = [
        data.status,
        data.orderStatus,
        data.payStatus,
        data.tradeStatus,
        data.state,
        data.msg
    ].filter(Boolean).map((item) => String(item));
    const candidates = [
        ...orderStatusCandidates,
        normalized.message
    ].filter(Boolean).map((item) => String(item));
    const isPaid = !!data.paid
        || !!data.isPaid
        || !!data.success
        || !!data.isSuccess
        || !!data.paidTime
        || !!data.payTime
        || orderStatusCandidates.some(isPaidExternalStatus);
    const isClosed = !!data.closed
        || !!data.isClosed
        || orderStatusCandidates.some(isClosedExternalStatus);
    return {
        isPaid,
        isClosed,
        statusText: candidates[0] || (isPaid ? "支付成功" : (isClosed ? "订单已关闭" : "待支付")),
        raw: normalized
    };
}

function applyCurrentPaymentStatus(orderId, status) {
    if (!state.plans.currentPayment || state.plans.currentPayment.orderId !== orderId) {
        return;
    }
    state.plans.currentPayment.statusText = status.statusText;
    state.plans.currentPayment.isPaid = status.isPaid;
    state.plans.currentPayment.isClosed = status.isClosed;
    saveCurrentPaymentState();
}

async function checkMembershipOrderStatus(orderId) {
    const payload = await externalPayRequest(`Api/Pay/External/Check?orderId=${encodeURIComponent(orderId)}`);
    const status = parseExternalOrderStatus(payload);
    applyCurrentPaymentStatus(orderId, status);
    return status;
}

async function syncMembershipByOrderId(orderId, monthsToAdd, showSuccess = true, options = {}) {
    const { skipPaymentCheck = false } = options;
    if (!skipPaymentCheck) {
        const status = await checkMembershipOrderStatus(orderId);
        renderPlans();
        if (!status.isPaid) {
            throw new Error(status.isClosed ? "当前订单已关闭，请重新下单后再同步会员" : "当前订单尚未支付，不能同步会员");
        }
    }

    const payload = await apiRequest("User/pro-membership/sync", {
        method: "POST",
        body: {
            orderId,
            monthsToAdd: Number(monthsToAdd || 1)
        }
    });
    state.profile.info = normalizeUser(payload || {});
    state.currentUser = state.profile.info;
    saveJson("currentUser", state.currentUser);
    updateHeaderUserBadges();
    invalidateQuotaSummary();
    if (state.plans.currentPayment && state.plans.currentPayment.orderId === orderId) {
        state.plans.currentPayment.isPaid = true;
        state.plans.currentPayment.statusText = "支付成功";
        saveCurrentPaymentState();
    }
    renderPlans();
    renderProfile();
    if (showSuccess) {
        showNotification("会员状态已同步更新", "success");
    }
    return payload;
}

async function createPlanOrder(planId) {
    const plan = getPlanDefinition(planId);
    const user = state.profile.info || normalizeUser(state.currentUser || {});
    if (!plan) {
        showNotification("未找到对应的订阅套餐", "warning");
        return;
    }
    if (!user.id) {
        showNotification("请先登录，再创建支付订单", "warning");
        return;
    }

    try {
        const externalUserId = `u_${user.id}`;
        const payload = await externalPayRequest("Api/Pay/External/Create", {
            method: "POST",
            body: {
                clientId: EXTERNAL_PAY_CLIENT_ID,
                externalUserId,
                externalOrderId: buildExternalOrderId(externalUserId, plan.id),
                payWay: getPaymentWayCode(state.plans.paymentChannel),
                amount: plan.amount,
				PackageType:plan.content,
                content: plan.content
            }
        });
        const payment = normalizePayload(payload.data || payload);
        state.plans.currentPayment = normalizePlanPaymentState({
            ownerUserId: user.id,
            planId: plan.id,
            channelCode: state.plans.paymentChannel,
            orderId: payment.orderId,
            externalOrderId: payment.externalOrderId,
            payUrl: payment.payUrl,
            payWay: payment.payWay,
            amount: payment.amount || plan.amount,
            monthsToAdd: plan.monthsToAdd,
            content: plan.content,
            createdAt: new Date().toISOString(),
            statusText: "待支付",
            isPaid: false,
            isClosed: false
        });
        saveCurrentPaymentState();
        qs("membershipOrderId").value = state.plans.currentPayment.orderId;
        qs("membershipMonths").value = String(plan.monthsToAdd);
        renderPlans();
        showNotification("支付订单已创建，请继续完成支付", "success");
    } catch (error) {
        showNotification(error.message || "创建支付订单失败", "error");
    }
}

async function refreshCurrentPaymentStatus() {
    const currentPayment = state.plans.currentPayment;
    if (!currentPayment?.orderId) {
        showNotification("当前没有可刷新的支付订单", "warning");
        return;
    }

    try {
        const status = await checkMembershipOrderStatus(currentPayment.orderId);

        if (status.isPaid) {
            await syncMembershipByOrderId(currentPayment.orderId, currentPayment.monthsToAdd, false, { skipPaymentCheck: true });
            showNotification("支付已完成，会员状态已刷新", "success");
            return;
        }

        renderPlans();
        showNotification(status.isClosed ? "当前订单已关闭，请重新下单" : "订单仍在等待支付", status.isClosed ? "warning" : "info");
    } catch (error) {
        showNotification(error.message || "刷新支付状态失败", "error");
    }
}

function openCurrentPaymentLink() {
    const currentPayment = state.plans.currentPayment;
    if (!currentPayment?.payUrl) {
        showNotification("当前订单没有可打开的支付链接", "warning");
        return;
    }
    window.open(currentPayment.payUrl, "_blank", "noopener");
}

function fillCurrentPaymentToMembershipForm() {
    const currentPayment = state.plans.currentPayment;
    if (!currentPayment?.orderId) {
        showNotification("当前没有可带入的支付订单", "warning");
        return;
    }
    qs("membershipOrderId").value = currentPayment.orderId;
    qs("membershipMonths").value = String(currentPayment.monthsToAdd || 1);
    qs("membershipOrderId").focus();
    showNotification("已将订单号带入会员同步表单", "info");
}

function renderCurrentPaymentQRCode(currentPayment) {
    const qrSection = qs("planQrSection");
    const qrContainer = qs("planQrCode");
    qrContainer.innerHTML = "";
    if (!currentPayment?.payUrl || currentPayment.isPaid || currentPayment.isClosed) {
        qrSection.classList.add("hidden");
        return;
    }

    qrSection.classList.remove("hidden");
    if (window.QRCode) {
        new QRCode(qrContainer, {
            text: currentPayment.payUrl,
            width: 220,
            height: 220
        });
    } else {
        qrContainer.innerHTML = `<a class="btn btn-primary" href="${escapeHtml(currentPayment.payUrl)}" target="_blank" rel="noopener">打开支付链接</a>`;
    }
}

function getCurrentPaymentStatusText(currentPayment) {
    if (!currentPayment) {
        return "";
    }
    if (currentPayment.isPaid) {
        return "支付成功";
    }
    if (currentPayment.isClosed) {
        return "订单已关闭";
    }
    return currentPayment.statusText || "待支付";
}

function renderCurrentPaymentCard() {
    const user = state.profile.info || normalizeUser(state.currentUser || {});
    const currentPayment = state.plans.currentPayment;
    if (currentPayment?.ownerUserId && user.id && Number(currentPayment.ownerUserId) !== Number(user.id)) {
        clearCurrentPaymentState();
    }

    const nextPayment = state.plans.currentPayment;
    qs("planRefreshStatusBtn").disabled = !nextPayment?.orderId;
    qs("planOpenPaymentBtn").disabled = !nextPayment?.payUrl;
    qs("planFillOrderBtn").disabled = !nextPayment?.orderId;

    if (!nextPayment) {
        qs("planCurrentOrder").innerHTML = renderEmpty("暂无待支付或待同步的会员订单");
        qs("planQrSection").classList.add("hidden");
        return;
    }

    const plan = getPlanDefinition(nextPayment.planId);
    const statusTagClass = nextPayment.isPaid ? "success" : (nextPayment.isClosed ? "danger" : "");
    const statusText = getCurrentPaymentStatusText(nextPayment);
    qs("planCurrentOrder").innerHTML = `
        <div class="forward-package-item">
            <div>
                <strong>${escapeHtml(plan?.title || nextPayment.planId)} / ${escapeHtml(getPaymentChannelDisplayName(nextPayment.channelCode))}</strong>
                <p>订单号：${escapeHtml(nextPayment.orderId || "-")}</p>
                ${nextPayment.externalOrderId ? `<p>外部订单号：${escapeHtml(nextPayment.externalOrderId)}</p>` : ""}
                <p>支付金额：${escapeHtml(formatMoney(nextPayment.amount))}，开通时长：${escapeHtml(String(nextPayment.monthsToAdd || plan?.monthsToAdd || 0))} 个月</p>
                <p>创建时间：${escapeHtml(nextPayment.createdAt ? formatDateTime(nextPayment.createdAt) : "-")}</p>
            </div>
            <span class="tag ${statusTagClass}">${escapeHtml(statusText)}</span>
        </div>
    `;
    qs("planQrHint").textContent = nextPayment.channelCode === "wechat"
        ? "请使用微信扫一扫完成支付，支付成功后返回这里刷新状态。"
        : "支付宝通常会直接拉起支付链接；支付成功后如果会员状态还没刷新，再使用同步流程。";
    renderCurrentPaymentQRCode(nextPayment);
}

function bindPlanEvents() {
    document.querySelectorAll("[data-plan-id]").forEach((button) => {
        button.addEventListener("click", () => {
            qs("membershipMonths").value = button.dataset.planMonths;
            createPlanOrder(button.dataset.planId);
        });
    });
    qs("planPaymentChannel").addEventListener("change", (event) => {
        state.plans.paymentChannel = event.target.value;
        localStorage.setItem("planPaymentChannel", state.plans.paymentChannel);
        renderPlans();
    });
    qs("planRefreshStatusBtn").addEventListener("click", refreshCurrentPaymentStatus);
    qs("planOpenPaymentBtn").addEventListener("click", openCurrentPaymentLink);
    qs("planFillOrderBtn").addEventListener("click", fillCurrentPaymentToMembershipForm);
    qs("membershipSyncForm").addEventListener("submit", handleMembershipSync);
}

function renderPlans() {
    const user = getCurrentUserProfile();
    qs("planPaymentChannel").value = state.plans.paymentChannel || "alipay";
    qs("planPaymentHint").textContent = state.plans.paymentChannel === "wechat"
        ? "网页端会创建微信支付订单，并展示二维码；支付完成后可在当前页面刷新状态。"
        : "网页端会优先创建支付宝支付链接；支付成功后可通过右侧订单同步流程刷新会员时长。";
    qs("planCurrentStatus").innerHTML = `
        <h3>${user.isPro ? "当前已开通 Pro 会员" : "当前尚未开通 Pro 会员"}</h3>
        <p>当前账号：${escapeHtml(user.displayName || user.userName || "-")}</p>
        <p>到期时间：${escapeHtml(user.proExpireAtUtc ? formatDateTime(user.proExpireAtUtc) : "-")}</p>
        <p>账号状态：${user.isActive ? "正常" : "已停用"}</p>
        <p>当前支付方式：${escapeHtml(getPaymentChannelDisplayName(state.plans.paymentChannel))}</p>
    `;
    renderCurrentPaymentCard();
}

async function handleMembershipSync(event) {
    event.preventDefault();
    const orderId = qs("membershipOrderId").value.trim();
    const monthsToAdd = Number(qs("membershipMonths").value || 1);
    if (!orderId) {
        showNotification("请输入需要同步的订单号", "warning");
        return;
    }
    if (!Number.isFinite(monthsToAdd) || monthsToAdd <= 0) {
        showNotification("请输入有效的会员时长", "warning");
        return;
    }
    try {
        await syncMembershipByOrderId(orderId, monthsToAdd, true);
    } catch (error) {
        showNotification(error.message || "同步会员状态失败", "error");
    }
}

function bindWeatherEvents() {
    qs("weatherSearchBtn").addEventListener("click", loadWeatherForecast);
    qs("weatherCreateReminderBtn").addEventListener("click", async () => {
        if (await ensureTodoCreationAllowed()) {
            openTodoModal("weather");
        }
    });
    ["weatherCityInput", "weatherAdcodeInput"].forEach((id) => {
        const input = qs(id);
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                loadWeatherForecast();
            }
        });
    });
}

function normalizeWeatherLookupKey(key) {
    return String(key || "")
        .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
        .replace(/[\s-]+/g, "_")
        .toLowerCase();
}

function getWeatherObjectValue(source, candidates) {
    if (!source || typeof source !== "object") {
        return null;
    }

    const targetKeys = []
        .concat(candidates || [])
        .filter(Boolean)
        .map(normalizeWeatherLookupKey);

    for (const [key, value] of Object.entries(source)) {
        if (targetKeys.includes(normalizeWeatherLookupKey(key))) {
            return value;
        }
    }

    return null;
}

function getWeatherPrimitiveText(value) {
    if (value == null) {
        return "";
    }
    if (typeof value === "string") {
        return value.trim();
    }
    if (typeof value === "number") {
        return String(value);
    }
    if (typeof value === "boolean") {
        return value ? "是" : "否";
    }
    return "";
}

function resolveWeatherLabel(key) {
    const raw = String(key || "");
    const normalized = normalizeWeatherLookupKey(raw);
    return WEATHER_KEY_LABELS[raw] || WEATHER_KEY_LABELS[normalized] || raw;
}

function weatherValueToDisplay(value) {
    if (value == null) {
        return "";
    }
    if (typeof value === "boolean") {
        return value ? "是" : "否";
    }
    if (typeof value === "number") {
        return String(value);
    }
    if (typeof value === "string") {
        return value;
    }
    return JSON.stringify(value, null, 2);
}

function appendWeatherDetailRows(rows, value, prefix = "") {
    if (value == null) {
        return;
    }

    if (Array.isArray(value)) {
        value.forEach((item, index) => {
            const nextPrefix = prefix ? `${prefix} ${index + 1}` : `值 ${index + 1}`;
            appendWeatherDetailRows(rows, item, nextPrefix);
        });
        return;
    }

    if (typeof value === "object") {
        Object.entries(value).forEach(([key, childValue]) => {
            const label = prefix ? `${prefix} / ${resolveWeatherLabel(key)}` : resolveWeatherLabel(key);
            if (childValue != null && typeof childValue === "object") {
                appendWeatherDetailRows(rows, childValue, label);
            } else {
                const text = weatherValueToDisplay(childValue);
                if (text !== "") {
                    rows.push({ label, value: text });
                }
            }
        });
        return;
    }

    const text = weatherValueToDisplay(value);
    if (text !== "") {
        rows.push({ label: prefix || "值", value: text });
    }
}

function buildWeatherRows(value) {
    const rows = [];
    appendWeatherDetailRows(rows, value);
    return rows;
}

function renderWeatherRows(rows, emptyMessage) {
    if (!rows.length) {
        return renderEmpty(emptyMessage);
    }

    return rows.map((item) => `
        <article class="weather-item">
            <strong>${escapeHtml(item.label)}</strong>
            <p>${escapeHtml(item.value)}</p>
        </article>
    `).join("");
}

function buildWeatherLocationTitle(payload) {
    const province = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["province"]));
    const city = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["city"]));
    const district = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["district"]));
    const parts = [];

    if (province) {
        parts.push(province);
    }
    if (city && city !== province) {
        parts.push(city);
    }
    if (district && district !== city) {
        parts.push(district);
    }

    return parts.join(" ");
}

function buildWeatherSummary(payload) {
    const weather = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["weather", "textDay", "text_day", "summary"]));
    const temperature = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["temperature", "temp", "tempMax", "temp_max"]));
    const humidity = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["humidity"]));
    const parts = [];

    if (weather) {
        parts.push(weather);
    }
    if (temperature) {
        parts.push(`${temperature}°C`);
    }
    if (humidity) {
        parts.push(`湿度 ${humidity}%`);
    }

    return parts.join(" | ");
}

function getWeatherItemTitle(item, sectionLabel, index) {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
        return `${sectionLabel} ${index + 1}`;
    }

    const titleValue = getWeatherObjectValue(item, WEATHER_TITLE_CANDIDATES.concat(["fxDate", "fxTime"]));
    const titleText = getWeatherPrimitiveText(titleValue);
    if (titleText) {
        return titleText;
    }

    if (sectionLabel === WEATHER_SECTION_LABELS.minutely) {
        const summary = getWeatherPrimitiveText(getWeatherObjectValue(item, ["summary", "desc", "details"]));
        if (summary) {
            return summary;
        }
    }

    return `${sectionLabel} ${index + 1}`;
}

function getWeatherSectionSource(payload, sectionKey) {
    const candidatesMap = {
        forecast: ["forecast"],
        hourly: ["hourly"],
        minutely: ["minutely", "minutelyPrecip", "minutely_precip"],
        indices: ["indices", "index"]
    };
    return getWeatherObjectValue(payload, candidatesMap[sectionKey] || [sectionKey]);
}

function renderWeatherSectionList(sectionKey, emptyMessage) {
    const payload = state.weather.payload || {};
    const sectionLabel = WEATHER_SECTION_LABELS[sectionKey] || sectionKey;
    const source = getWeatherSectionSource(payload, sectionKey);
    const items = Array.isArray(source)
        ? source
        : (source == null ? [] : [source]);

    if (!items.length) {
        return renderEmpty(emptyMessage);
    }

    return items.map((item, index) => {
        const title = getWeatherItemTitle(item, sectionLabel, index);
        const rows = buildWeatherRows(item);
        return `
            <article class="weather-section-card">
                <div class="weather-section-head">
                    <h4>${escapeHtml(title)}</h4>
                </div>
                <div class="weather-list">
                    ${renderWeatherRows(rows, `${sectionLabel}暂无详细数据`)}
                </div>
            </article>
        `;
    }).join("");
}

async function loadWeatherForecast() {
    const city = qs("weatherCityInput").value.trim();
    const adcode = qs("weatherAdcodeInput").value.trim();
    const params = new URLSearchParams();

    if (adcode) {
        params.set("adcode", adcode);
    } else if (city) {
        params.set("city", city);
    }

    if (qs("weatherUseExtended").checked) params.set("extended", "true");
    if (qs("weatherUseForecast").checked) params.set("forecast", "true");
    if (qs("weatherUseHourly").checked) params.set("hourly", "true");
    if (qs("weatherUseMinutely").checked) params.set("minutely", "true");
    if (qs("weatherUseIndices").checked) params.set("indices", "true");

    state.weather.lastQuery = adcode || city || "";
    state.weather.statusText = "正在查询天气...";
    state.weather.payload = null;
    renderWeather();

    try {
        const url = params.toString() ? `${WEATHER_API_URL}?${params.toString()}` : WEATHER_API_URL;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${WEATHER_API_TOKEN}`,
                Accept: "application/json"
            }
        });
        const rawPayload = await readJson(response);
        const payload = normalizePayload(rawPayload?.data && typeof rawPayload.data === "object" ? rawPayload.data : (rawPayload || {}));

        if (!response.ok) {
            throw new Error(extractErrorMessage(rawPayload, `天气接口返回 ${response.status}`));
        }

        if (rawPayload && rawPayload.successful === false) {
            throw new Error(extractErrorMessage(rawPayload, "天气查询失败"));
        }

        state.weather.payload = payload;
        state.weather.statusText = "";
        renderWeather();
        showNotification("已获取最新天气信息", "success");
    } catch (error) {
        state.weather.payload = null;
        state.weather.location = "";
        state.weather.summary = "";
        state.weather.statusText = error.message || "查询失败，请检查网络或授权信息。";
        renderWeather();
        showNotification(state.weather.statusText, "error");
    }
}

function renderWeather() {
    const payload = state.weather.payload || {};
    const locationFromPayload = buildWeatherLocationTitle(payload);
    const location = locationFromPayload || state.weather.lastQuery || "尚未查询天气";
    const summary = buildWeatherSummary(payload) || "-";
    const reportTime = getWeatherPrimitiveText(getWeatherObjectValue(payload, ["reportTime", "report_time"]));
    const hasStructuredData = Object.keys(payload).length > 0;
    const currentPayload = {};

    Object.entries(payload).forEach(([key, value]) => {
        if (!["forecast", "hourly", "minutely", "minutelyPrecip", "minutely_precip", "indices", "index"].includes(key)) {
            currentPayload[key] = value;
        }
    });

    const currentDetails = buildWeatherRows(currentPayload);
    state.weather.location = locationFromPayload || state.weather.lastQuery || "";
    state.weather.summary = summary === "-" ? "" : summary;

    qs("weatherLocationTitle").textContent = location;
    qs("weatherCurrentSummary").textContent = summary;
    qs("weatherStatusText").textContent = state.weather.statusText
        || (reportTime ? `更新时间：${reportTime}` : (hasStructuredData ? "已获取最新天气信息。" : "城市和行政区编码都为空时，将按客户端 IP 自动定位。"));

    qs("weatherCurrentDetails").innerHTML = renderWeatherRows(currentDetails, "暂无天气明细");
    qs("weatherForecastList").innerHTML = renderWeatherSectionList("forecast", "暂无未来天气数据");
    qs("weatherExtraSections").innerHTML = [
        ["hourly", "暂无逐小时天气数据"],
        ["minutely", "暂无分钟级降水数据"],
        ["indices", "暂无生活指数数据"]
    ].map(([key, emptyMessage]) => `
        <section class="weather-section">
            <div class="weather-section-head">
                <h4>${escapeHtml(WEATHER_SECTION_LABELS[key])}</h4>
            </div>
            ${renderWeatherSectionList(key, emptyMessage)}
        </section>
    `).join("");
}
document.addEventListener("DOMContentLoaded", async () => {
    initializeRepeatMonthDayOptions();
    bindGlobalEvents();
    bindLanguageControls();
    ensureLanguageObserver();
    applyLanguageSettings();

    if (state.authToken && state.currentUser) {
        showMainInterface();
        try {
            await initializeSignalR();
            await loadInitialData();
        } catch (error) {
            console.error(error);
            showNotification("初始化失败，请重新登录", "error");
        }
    } else {
        showLoginInterface();
    }
});













