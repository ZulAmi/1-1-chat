/**
 * API endpoint handler for hello route
 * Supports GET method only
 */
export default function handler(req, res) {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }

    // Validate HTTP method
    if (req.method !== 'GET') {
      return res.status(405).json({
        error: 'Method not allowed',
        message: 'Only GET requests are supported'
      });
    }

    // Return successful response
    return res.status(200).json({
      success: true,
      data: {
        name: 'John Doe',
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    // Handle any unexpected errors
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
