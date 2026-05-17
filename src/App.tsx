import { MessageCircle, Globe, Settings, Music, Heart, Book, Coffee, Palette } from 'lucide-react';

function App() {
  const apps = [
    { name: '和小星聊天', icon: <MessageCircle size={28} /> },
    { name: '小星浏览器', icon: <Globe size={28} /> },
    { name: '小星的家', icon: <Heart size={28} /> },
    { name: '日记本', icon: <Book size={28} /> },
    { name: '星星币', icon: <Coffee size={28} /> },
    { name: '主题外观', icon: <Palette size={28} /> },
  ];

  const dockApps = [
    { name: '聊天', icon: <MessageCircle size={30} />, color: '#ffb3c6' },
    { name: '朋友圈', icon: <Heart size={30} />, color: '#99ccff' },
    { name: '音乐', icon: <Music size={30} />, color: '#ffcc99' },
    { name: '设置', icon: <Settings size={30} />, color: '#cccccc' },
  ];

  return (
    <div className="phone-container">
      {/* 桌面区域 */}
      <div className="desktop">
        {apps.map((app, index) => (
          <div key={index} className="app-icon">
            <div className="app-icon-inner">{app.icon}</div>
            <span className="app-name">{app.name}</span>
          </div>
        ))}
      </div>
      
      {/* 底部Dock栏 */}
      <div className="dock">
        {dockApps.map((app, index) => (
          <div key={index} className="app-icon">
            <div 
              className="app-icon-inner" 
              style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(255, 255, 255, 0.8)' 
              }}
            >
              {app.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;