// This module exports WhatsApp channel context information for newsletter forwarding
module.exports = {
  channelInfo: {
    contextInfo: {
      // Forwarding score (1000 = high priority/forwarded message)
      forwardingScore: 1000,
      
      // Indicates this message was forwarded
      isForwarded: true,
      
      // Newsletter-specific forwarding information
      forwardedNewsletterMessageInfo: {
        // Complete newsletter JID (WhatsApp identifier)
        newsletterJid: "120363409336590694@newsletter",
        
        // Display name for the newsletter
        newsletterName: "BuildCabal Bot Channel Channel",
        
        // Server-assigned message ID (-1 indicates test value)
        serverMessageId: -1
      }
    }
  }
};
