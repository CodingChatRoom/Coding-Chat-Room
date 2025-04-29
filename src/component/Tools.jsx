import React, { useState } from 'react';
import './css/tools.css';

function Tools() {
  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);

  const [domain, setDomain] = useState('');
  const [domainData, setDomainData] = useState(null);

  const [proxyList, setProxyList] = useState([]);

  const handleIpLookup = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const result = await response.json();
      setIpData(result);
    } catch (error) {
      setIpData(null);
    }
  };

  const handleDomainLookup = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
        headers: {
          'X-Api-Key': 'JM/ctkfawWqxBpMfauiRCg==wZSOSW8z3HTfPY5l', 
        }
      });
      const result = await response.json();
      setDomainData(result);
    } catch (error) {
      setDomainData(null);
    }
  };

  const handleFetchProxies = async () => {
    try {
      const response = await fetch('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=1000&country=all');
      const text = await response.text();
      const proxies = text.split('\n').filter(Boolean);
      setProxyList(proxies.slice(0, 10)); // First 10 proxies
    } catch (error) {
      setProxyList([]);
    }
  };

  return (
    <div className="tools-container">
      {/* IP Lookup Tool */}
      <h1>IP Lookup Tool</h1>
      <input
        type="text"
        placeholder="Enter IP address"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        className="input-field"
      />
      <button onClick={handleIpLookup} className="button">Lookup IP</button>

      {ipData && (
        <div className="result-box">
          <h2>IP Result:</h2>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>City:</strong> {ipData.city}</p>
          <p><strong>Region:</strong> {ipData.region}</p>
          <p><strong>Country:</strong> {ipData.country_name}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </div>
      )}

      {/* Domain WHOIS Tool */}
      <h1 style={{ marginTop: '60px' }}>Domain WHOIS Tool</h1>
      <input
        type="text"
        placeholder="Enter domain (e.g., google.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="input-field"
      />
      <button onClick={handleDomainLookup} className="button">Lookup Domain</button>

      {domainData && (
        <div className="result-box">
          <h2>Domain Result:</h2>
          <p><strong>Domain:</strong> {domainData.domain}</p>
          <p><strong>Registrar:</strong> {domainData.registrar}</p>
          <p><strong>Created Date:</strong> {domainData.created}</p>
          <p><strong>Expiry Date:</strong> {domainData.expiry}</p>
        </div>
      )}

      {/* Proxy List Fetcher */}
      <h1 style={{ marginTop: '60px' }}>Random Proxy List</h1>
      <button onClick={handleFetchProxies} className="button">Fetch Proxies</button>

      {proxyList.length > 0 && (
        <div className="result-box">
          <h2>Proxy List:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {proxyList.map((proxy, index) => (
              <li key={index}>{proxy}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tools;
