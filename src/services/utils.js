export function getOS() {
    const userAgent = navigator.userAgent.toLowerCase();
    const platform = navigator.platform.toLowerCase();
    console.log("USER AGENT: ", userAgent) 
    console.log("PLATFORM: ", platform) 
    if (platform.startsWith('win')) return 'exe';
    if (platform.startsWith('mac')) return 'dmg';
  
    // Check for common Linux distributions
    if (/android/.test(userAgent)) return 'Android';
    if (/ubuntu/.test(userAgent)) return 'deb';
    if (/fedora/.test(userAgent)) return 'rpm';
    if (/debian/.test(userAgent)) return 'deb';
    if (/arch/.test(userAgent)) return 'Arch Linux';
    if (/centos/.test(userAgent)) return 'CentOS';
    if (/mint/.test(userAgent)) return 'deb';
    if (/suse/.test(userAgent) || /opensuse/.test(userAgent)) return 'openSUSE';
    if (/manjaro/.test(userAgent)) return 'Manjaro';
    if (/elementary/.test(userAgent)) return 'elementary OS';
    if (/kali/.test(userAgent)) return 'deb';
  
    // Generic Linux check
    if (platform.startsWith('linux') || userAgent.includes('linux')) return 'deb';
  
    // Check for iOS devices
    if (/iphone|ipad|ipod/.test(userAgent)) return 'iOS';
  
    return 'Unknown OS';
  }
  
  console.log('Operating System:', getOS());