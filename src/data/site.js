/* ------------------------------------------------------------------
   Site content & configuration
   Edit this file to update links, payment methods, services and
   broker cards. No backend is used anywhere on this site.
------------------------------------------------------------------ */

export const BRAND = {
    name: 'Hwillerz FX Payment Agent',
    short: 'HWILLERZ FX',
    tagline: 'Forex Payment Agent · Zimbabwe',
  }
  
  /* Contact details ------------------------------------------------- */
  export const contacts = [
    {
      label: 'Primary line',
      phone: '0784682087',
      tel: '+263784682087',
      whatsapp: 'https://wa.me/263784682087',
    },
    {
      label: 'Alternative line',
      phone: '0712853757',
      tel: '+263712853757',
      whatsapp: 'https://wa.me/263712853757',
    },
  ]
  
  export const WHATSAPP_PRIMARY = contacts[0].whatsapp
  
  /* Socials --------------------------------------------------------- */
  export const socials = [
    {
      label: 'Instagram',
      handle: '@hwillerz_x',
      href: 'https://instagram.com/hwillerz_x',
    },
  ]
  

  export const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Payment Methods', href: '#payments' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ]
  
  /* Services -------------------------------------------------------- */
  export const services = [
    {
      icon: 'Wallet',
      title: 'Forex Account Deposits',
      text: 'Fund your trading account with clear, step-by-step guidance on the right channel for your deposit.',
    },
    {
      icon: 'ArrowUpFromLine',
      title: 'Forex Account Withdrawals',
      text: 'Withdraw from your broker via crypto and receive cash locally — we guide you through the payout step by step.',
    },
    {
      icon: 'Bitcoin',
      title: 'Cryptocurrency Transactions',
      text: 'Assistance with supported cryptocurrencies including Bitcoin, Ethereum and USDT.',
    },
    {
      icon: 'LifeBuoy',
      title: 'Payment Assistance',
      text: 'Not sure which method to use? Get personal guidance on the most convenient option for you.',
    },
  ]
  
  /* Payment methods -------------------------------------------------
     Mukuru is a DEPOSIT channel only. Withdrawals are paid out via
     crypto, which the client then converts to cash with our agent.
  ------------------------------------------------------------------ */
  export const paymentMethods = [
    { name: 'EcoCash', note: 'Mobile money', mark: 'E', color: '#3F8FE0' },
    { name: 'CASH', note: 'Cash agent services', mark: 'C', color: '#C9A227' },
    { name: 'Mukuru', note: 'Deposits only', mark: 'M', color: '#F0803C' },
    { name: 'Bitcoin', note: 'BTC · deposit & withdrawal', mark: '₿', color: '#F7931A' },
    { name: 'Ethereum', note: 'ETH · deposit & withdrawal', mark: 'Ξ', color: '#8A9BE0' },
    { name: 'USDT', note: 'Tether · deposit & withdrawal', mark: '₮', color: '#35B58C' },
    { name: 'Other crypto', note: 'Ask your agent', mark: '+', color: '#D4AF62' },
    { name: 'More methods', note: 'Confirm on WhatsApp', mark: '?', color: '#93A6B9' },
  ]
  
  /* Broker cards ----------------------------------------------------
     We assist with ALL brokers — these are simply the most commonly
     requested ones. Add/remove names freely in this array.
  ------------------------------------------------------------------ */
  export const brokers = [
    { id: 1, name: 'Weltrade', status: 'Supported' },
    { id: 2, name: 'Deriv', status: 'Supported' },
    { id: 3, name: 'Exness', status: 'Supported' },
    { id: 4, name: 'JustMarkets', status: 'Supported' },
  ]
  
  /* How it works ---------------------------------------------------- */
  export const steps = [
    {
      title: 'Contact Hwillerz FX',
      text: 'Reach out on WhatsApp or call us and tell us what you need — a deposit or a withdrawal.',
    },
    {
      title: 'Share your details',
      text: 'Provide your broker name and the transaction details so we can guide you correctly.',
    },
    {
      title: 'Confirm and complete',
      text: 'Confirm the payment instructions with your agent, then complete your transaction.',
    },
  ]
  
  /* Form options ---------------------------------------------------- */
  export const transactionTypes = ['Deposit', 'Withdrawal']
  
  export const formPaymentMethods = [
    'EcoCash',
    'CASH',
    'Mukuru (deposits only)',
    'Bitcoin (BTC)',
    'Ethereum (ETH)',
    'USDT',
    'Other cryptocurrency',
    'Not sure yet',
  ]