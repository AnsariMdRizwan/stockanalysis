import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Stock } from '../types/stock';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface StockCardProps {
  stock: Stock;
  onClick?: () => void;
}

const StockCard: React.FC<StockCardProps> = ({ stock, onClick }) => {
  const isPositive = stock.change >= 0;
  const color = isPositive ? 'success' : 'error';

  return (
    <Card
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick ? {
          boxShadow: 6,
          transform: 'translateY(-2px)',
          transition: 'all 0.2s ease-in-out'
        } : {}
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" component="div">
              {stock.symbol}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {stock.name}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            {isPositive ? <TrendingUpIcon color="success" /> : <TrendingDownIcon color="error" />}
            <Typography variant="h6" color={`${color}.main`}>
              ${stock.currentPrice.toFixed(2)}
            </Typography>
          </Box>
        </Box>
        <Box mt={2} display="flex" gap={1}>
          <Chip
            label={`${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePercent.toFixed(2)}%)`}
            color={color}
            size="small"
          />
          <Chip
            label={`Vol: ${(stock.volume / 1000000).toFixed(1)}M`}
            variant="outlined"
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockCard; 