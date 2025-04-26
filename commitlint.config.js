// commitlint.config.js
export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
  },
  prompt: {
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Docs',
            emoji: '📚',
          },
          style: {
            description: 'Formatting only',
            title: 'Style',
            emoji: '💎',
          },
          refactor: {
            description: 'Code restructuring without behavior change',
            title: 'Refactor',
            emoji: '📦',
          },
          perf: {
            description: 'Performance improvements',
            title: 'Perf',
            emoji: '🚀',
          },
          test: {
            description: 'Tests: add/fix',
            title: 'Test',
            emoji: '🚨',
          },
          build: {
            description: 'Build system or dependency changes',
            title: 'Build',
            emoji: '🛠',
          },
          ci: {
            description: 'CI-related changes',
            title: 'CI',
            emoji: '⚙',
          },
          chore: {
            description: 'Other changes that don’t affect source or tests',
            title: 'Chore',
            emoji: '♻',
          },
          revert: {
            description: 'Revert a previous commit',
            title: 'Revert',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g., component name)?',
      },
      subject: {
        description: 'Write a short, imperative description of the change',
      },
      body: {
        description: 'Provide a longer description (optional)',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issues: {
        description: 'Add issue references (e.g., "fix #123")',
      },
    },
  },
}
