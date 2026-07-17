import type { APIRoute } from 'astro';
import {
  guideSections,
  optionalLinks,
  fallbackSiteUrl,
  llmExportPolicy,
} from '@/data/guides-llms-index.mjs';

/**
 * Dynamic llms.txt generator (https://llmstxt.org spec)
 *
 * Provides a curated, LLM-friendly index of the VividKit Guides so AI agents
 * can discover and navigate the AgentKit documentation without scraping HTML.
 * Sections and link data live in guides-llms-index.mjs (shared with the
 * /llms-full.txt build integration). Vietnamese mirrors live under the /vi
 * prefix of each path.
 */

interface GuideLink {
  title: string;
  path: string;
  desc: string;
}

interface GuideSection {
  heading: string;
  links: GuideLink[];
}

export const GET: APIRoute = () => {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || fallbackSiteUrl;

  const renderLink = ({ title, path, desc }: GuideLink) =>
    `- [${title}](${siteUrl}${path}): ${desc}`;

  const renderSection = ({ heading, links }: GuideSection) =>
    `## ${heading}\n\n${links.map(renderLink).join('\n')}`;

  const body = [
    '# VividKit Guides',
    '',
    '> Comprehensive documentation for AgentKit — the successor to ClaudeKit — covering CK-to-AK migration, native CLI lifecycle, Engineer and Marketing kits, Claude Code, Codex, CCS, and troubleshooting.',
    '',
    `This index exports the ${llmExportPolicy.channel} channel only. Beta query content and isolated historical routes are not serialized as recommendations.`,
    '',
    `Each guide has a Vietnamese mirror at the same path prefixed with \`/vi\` (e.g. ${siteUrl}/vi/guides/commands). Current setup guidance uses AgentKit and target-native syntax; legacy ClaudeKit references are labeled migration or historical context. A full-text version is available at ${siteUrl}/llms-full.txt.`,
    '',
    (guideSections as GuideSection[]).map(renderSection).join('\n\n'),
    '',
    '## Optional',
    '',
    (optionalLinks as GuideLink[]).map(renderLink).join('\n'),
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
