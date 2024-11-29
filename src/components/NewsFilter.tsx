import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  Chip,
  IconButton,
  Tooltip,
  Collapse,
  Paper,
} from '@mui/material';
import {
  FilterList as FilterListIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';

interface NewsFilterProps {
  categories: string[];
  tags: string[];
  onFilterChange: (filters: NewsFilters) => void;
}

export interface NewsFilters {
  search: string;
  category: string;
  selectedTags: string[];
  dateRange: {
    start: string;
    end: string;
  };
}

const NewsFilter: React.FC<NewsFilterProps> = ({ categories, tags, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [filters, setFilters] = React.useState<NewsFilters>({
    search: '',
    category: '',
    selectedTags: [],
    dateRange: {
      start: '',
      end: '',
    },
  });

  const handleFilterChange = (newFilters: Partial<NewsFilters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters: NewsFilters = {
      search: '',
      category: '',
      selectedTags: [],
      dateRange: {
        start: '',
        end: '',
      },
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <Paper elevation={0} sx={{ mb: 4, p: 2, backgroundColor: 'background.default' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: isExpanded ? 2 : 0 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Tìm kiếm tin tức..."
          value={filters.search}
          onChange={(e) => handleFilterChange({ search: e.target.value })}
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
          }}
        />
        <Tooltip title={isExpanded ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}>
          <IconButton
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              transform: isExpanded ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.3s',
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        {(filters.search || filters.category || filters.selectedTags.length > 0) && (
          <Tooltip title="Xóa bộ lọc">
            <IconButton onClick={handleClearFilters} size="small">
              <ClearIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Collapse in={isExpanded}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Danh mục</InputLabel>
            <Select
              value={filters.category}
              label="Danh mục"
              onChange={(e) => handleFilterChange({ category: e.target.value })}
            >
              <MenuItem value="">Tất cả</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Autocomplete
            multiple
            size="small"
            options={tags}
            value={filters.selectedTags}
            onChange={(_, newValue) => handleFilterChange({ selectedTags: newValue })}
            renderInput={(params) => (
              <TextField {...params} label="Tags" placeholder="Chọn tags" sx={{ minWidth: 200 }} />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  size="small"
                  {...getTagProps({ index })}
                />
              ))
            }
          />

          <TextField
            size="small"
            type="date"
            label="Từ ngày"
            value={filters.dateRange.start}
            onChange={(e) =>
              handleFilterChange({
                dateRange: { ...filters.dateRange, start: e.target.value },
              })
            }
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            size="small"
            type="date"
            label="Đến ngày"
            value={filters.dateRange.end}
            onChange={(e) =>
              handleFilterChange({
                dateRange: { ...filters.dateRange, end: e.target.value },
              })
            }
            InputLabelProps={{ shrink: true }}
          />
        </Box>
      </Collapse>
    </Paper>
  );
};

export default NewsFilter;
