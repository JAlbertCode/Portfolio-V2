import React, { useState, useRef, useEffect } from 'react';

interface SkillsFilterProps {
  skills: string[];
  selectedSkills: string[];
  onSkillClick: (skill: string) => void;
}

const SkillsFilter: React.FC<SkillsFilterProps> = ({ skills, selectedSkills, onSkillClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);

    const filtered = skills.filter(skill => 
      skill.toLowerCase().includes(value.toLowerCase()) && 
      !selectedSkills.includes(skill)
    );
    setSuggestions(filtered);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      const firstSuggestion = suggestions[0];
      if (firstSuggestion && !selectedSkills.includes(firstSuggestion)) {
        onSkillClick(firstSuggestion);
        setSearchTerm('');
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (skill: string) => {
    onSkillClick(skill);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleRemoveSkill = (skill: string) => {
    onSkillClick(skill);
  };

  return (
    <div className="w-full mt-10 mb-16">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Filter by skills..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]"
        />
        
        {showSuggestions && suggestions.length > 0 && (
          <div 
            ref={suggestionsRef}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
          >
            {suggestions.map((skill) => (
              <div
                key={skill}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-1 filter-tag"
            >
              <span>{skill}</span>
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-1 focus:outline-none hover:text-gray-200"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsFilter;