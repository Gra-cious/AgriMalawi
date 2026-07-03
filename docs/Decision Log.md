This document records significant architectural and project decisions made during the development of AgriMalawi (AGM-001).

---

## ADR-001

**Date:** 2 July 2026

**Title:** Adopt a Mobile-First Design

### Decision

AgriMalawi will be designed using a mobile-first approach.

### Reason

Most target users in Malawi are expected to access the platform using smartphones rather than desktop computers.

### Impact

- Responsive layouts from the beginning.
- UI optimized for smaller screens.
- Desktop experience enhanced after mobile.

---

## ADR-002

**Date:** 2 July 2026

**Title:** Represent Farming Activities as Crop Projects

### Decision

The platform will organize agricultural information as complete Crop Projects rather than isolated articles.

### Reason

Beginners need a guided process from planning through harvest, not disconnected information.

### Impact

Each Crop Project will include:

- Introduction
- Land preparation
- Seed selection
- Planting
- Fertilizer schedule
- Irrigation
- Pest and disease management
- Weed management
- Budget
- Expected yield
- Harvest
- Post-harvest handling

---

## ADR-003

**Date:** 2 July 2026

**Title:** Technology Stack Selection

### Decision

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Django REST Framework
- PostgreSQL

### Reason

This stack provides excellent scalability, security, maintainability, and long-term community support.

### Impact

Frontend and backend will be developed independently and communicate through REST APIs.

---

## ADR-004

**Date:** 2 July 2026

**Title:** Use Git and GitHub From Day One

### Decision

Version control will begin immediately after project creation.

### Reason

Every working milestone should be recoverable and backed up.

### Impact

- Full project history.
- Safe collaboration in the future.
- Easy rollback if needed.

---

## ADR-005

**Date:** 3 July 2026

**Title:** Documentation-First Development

### Decision

Maintain project documentation throughout development.

### Reason

Good documentation improves maintainability and helps future contributors understand the project.

### Impact

The project includes:

- Vision
- Requirements
- Architecture
- Roadmap
- Development Journal
- Changelog
- Decision Log

---

## ADR-006

**Date:** 3 July 2026

**Title:** Build Incrementally

### Decision

Development will proceed in small, testable milestones.

### Reason

Completing and testing one feature at a time reduces complexity and makes debugging easier.

### Impact

Every development session ends with:

1. Application runs successfully.
2. Changes committed to Git.
3. Changes pushed to GitHub.
4. Documentation updated.

---

## ADR-007

**Date:** 3 July 2026

**Title:** Tomato as the First Crop Project

### Decision

The Tomato Crop Project will be the first complete implementation.

### Reason

Tomatoes are widely grown in Malawi and provide a realistic example for designing the Crop Project structure.

### Impact

Future Crop Projects will reuse the same structure with crop-specific information.
